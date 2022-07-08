from .constants import client, RECIPES_INDEX


def data_processing(data: dict):
    result = {}
    first_level = data["hits"]['hits']
    for hits in first_level:
        result[hits["_id"]] = hits["_source"]
        if hits["_score"]:
            result[hits["_id"]]["score"] = round(hits["_score"], 2)

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
    elasticsearch_data = client.search(index=RECIPES_INDEX, query=query, size=100)
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
    elasticsearch_data = client.search(index=RECIPES_INDEX, query=query, size=100)
    data = data_processing(data=elasticsearch_data)

    return data


def get_top_recipes():

    elasticsearch_data = client.search(index=RECIPES_INDEX, sort={"count_likes": {"order": "desc"}})
    data = data_processing(data=elasticsearch_data)

    return data
