from .constants import client, RECIPES_INDEX


def data_processing(data: dict):
    result = {}
    first_level = data["hits"]['hits']
    for hits in first_level:
        result[hits["_id"]] = hits["_source"]
        result[hits["_id"]]["count_likes"] = len(hits["_source"]["likes"])
        result[hits["_id"]]["score"] = round(hits["_score"], 2)

    return result


def put_doc_in_index(name: str, description: str, steps: list, categories: list, author: str, likes: list):
    index = RECIPES_INDEX
    _doc = {
        "name": name,
        "description": description,
        "steps": steps,
        "categories": categories,
        "author": author,
        "likes": likes,
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


def update_doc(id: str, likes: list, username: str):
    likes.append(username)
    client.index(index=RECIPES_INDEX, id=id, document={"likes": likes})
    return True


def getting_recipes_by_parameter(parameter: str):
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

def get_my_favorite_recipe(username: str):
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