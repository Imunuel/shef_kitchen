from .constants import client, RECIPES_INDEX


def data_processing(data: dict):
    result = {}
    first_level = data["hits"]['hits']
    for hits in first_level:
        result[hits["_id"]] = hits["_source"]

    return result


def put_doc_in_index(name: str, description: str, steps: list, categories: list, author: str, likes: list):
    index = RECIPES_INDEX
    _doc = {
        'name': name,
        'description': description,
        'steps': steps,
        "categories": categories,
        "author": author,
        "likes": likes,
    }
    return client.index(index=index, document=_doc)


def getting_recipes(parameter: str):
    query = {
        "bool": {
            "must": [
                {"match": {"name": parameter}}
            ],
            "should": [
                {"match": {"categories": parameter}}
            ]
        }
    }
    elasticsearch_data = client.search(index=RECIPES_INDEX, query=query, size=100)
    data = data_processing(data=elasticsearch_data)

    return data
