import random

from .constants import client, RECIPES_INDEX


def min_processing(data: dict):
    result = {
        "id": data["_id"],
        **data["_source"]
    }
    if data["_score"]:
        result['score'] = round(data["_score"], 2)

    return result


def data_processing(data: dict):
    first_level = data["hits"]['hits']
    result = [min_processing(recipe) for recipe in first_level]

    return result


def put_doc_in_index(photo: str, name: str, description: str, steps: list, categories: list, author: str, likes: list,
                     favorite: list, count_likes: int):
    index = RECIPES_INDEX
    _doc = {
        "photo": photo,
        "name": name,
        "description": description,
        "steps": steps,
        "categories": categories,
        "author": author,
        "likes": likes,
        "count_likes": count_likes,
        "favorite": favorite
    }
    return client.index(index=index, document=_doc)


def delete_recipe_by_id(id: str):
    query = {
        "bool": {
            "must": {"match": {"_id": id}}
        }
    }
    client.delete_by_query(index=RECIPES_INDEX, query=query)
    return True


def update_doc_after_like(id: str, username: str):
    _doc = client.get(index=RECIPES_INDEX, id=id)["_source"]
    _doc["likes"].append(username)
    _doc["count_likes"] += 1
    client.index(index=RECIPES_INDEX, id=id, document=_doc)
    return True


def update_doc_after_dislike(id: str, username: str):
    _doc = client.get(index=RECIPES_INDEX, id=id)["_source"]
    _doc["likes"].remove(username)
    _doc["count_likes"] -= 1
    client.index(index=RECIPES_INDEX, id=id, document=_doc)
    return True


def update_add_to_favorite(id: str, username: str):
    _doc = client.get(index=RECIPES_INDEX, id=id)["_source"]
    _doc["favorite"].append(username)
    client.index(index=RECIPES_INDEX, id=id, document=_doc)
    return True


def update_remove_from_favorite(id: str, username: str):
    _doc = client.get(index=RECIPES_INDEX, id=id)["_source"]
    _doc["favorite"].remove(username)
    client.index(index=RECIPES_INDEX, id=id, document=_doc)
    return True


def get_recipes_data_for_menu():
    breakfast = "breakfast"
    lunch = "lunch"
    dinner = "dinner"
    categories_list = [breakfast, lunch, dinner]
    menu_data = {}

    for category in categories_list:
        query = {
            "bool": {
                "should": [
                    {"match": {"categories": category}}
                ]
            }
        }
        elasticsearch_data = client.search(index=RECIPES_INDEX, query=query, size=100)
        data = data_processing(elasticsearch_data)
        menu_data[category] = data

    return menu_data


def get_recipes_by_parameter(parameter: str):
    query = {
        "bool": {
            "should": [
                {"match": {"name": parameter}},
                {"match": {"description": parameter}},
                {"match": {"categories": parameter}}
            ]
        }
    }
    elasticsearch_data = client.search(index=RECIPES_INDEX, query=query, size=10)
    data = data_processing(data=elasticsearch_data)

    return data


def get_my_favorite_recipes(username: str):
    query = {
        "bool": {
            "must": [
                {"match": {"favorite": username}}
            ]
        }
    }
    elasticsearch_data = client.search(index=RECIPES_INDEX, query=query, size=100,
                                       sort={"count_likes": {"order": "desc"}})
    data = data_processing(data=elasticsearch_data)

    return data


def get_top_recipes():
    elasticsearch_data = client.search(index=RECIPES_INDEX, sort={"count_likes": {"order": "desc"}}, size=100)
    data = data_processing(data=elasticsearch_data)

    return data


def get_recipe_by_id(id: str):
    query = {
        "bool": {
            "must": [
                {"match": {"_id": id}}
            ]
        }
    }
    elasticsearch_data = client.search(index=RECIPES_INDEX, query=query)
    data = data_processing(elasticsearch_data)

    return data


def get_my_recipes(username: str):
    query = {
        "bool": {
            "must": [
                {"match": {"author": username}}
            ]
        }
    }
    elasticsearch_data = client.search(index=RECIPES_INDEX, query=query, size=100,
                                       sort={"count_likes": {"order": "desc"}})
    data = data_processing(elasticsearch_data)

    return data


def get_recipes_by_categories(type: str, categories: str):
    categories = list(set(categories[:-1].split(",")))

    menu_data = get_recipes_data_for_menu()
    if type == "random":
        if categories != "":
            should = []
            for category in categories:
                should.append({"match": {"categories": category}})
            __query = {
                "bool": {
                    "should": should
                }
            }
            elasticsearch_data = client.search(index=RECIPES_INDEX, query=__query, size=100)
            data = data_processing(elasticsearch_data)
            data = data[random.randint(0, len(data))]
            return data
        elif categories == "":
            pass

    elif type == "day":
        day_menu = []
        if "evening" in categories:
            day_menu.append(menu_data["Breakfast"][random.randint(0, len(menu_data["Breakfast"]) - 1)])
        if "lunch" in categories:
            day_menu.append(menu_data["lunch"][random.randint(0, len(menu_data["lunch"]) - 1)])
        if "dinner" in categories:
            day_menu.append(menu_data["dinner"][random.randint(0, len(menu_data["dinner"]) - 1)])
        return day_menu

    elif type == "week":
        week_menu = []

        for i in range(0, 7):
            if "evening" in categories:
                evening_randomit = random.randint(0, len(menu_data["Breakfast"])) - 1
                week_menu.append(menu_data["Breakfast"][evening_randomit])
            if "lunch" in categories:
                lunch_randomit = random.randint(0, len(menu_data["lunch"])) - 1
                week_menu.append(menu_data["lunch"][lunch_randomit])
            if "dinner" in categories:
                dinner_randomit = random.randint(0, len(menu_data["dinner"])) - 1
                week_menu.append(menu_data["dinner"][dinner_randomit])
        return week_menu
