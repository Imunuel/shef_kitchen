from elasticsearch import Elasticsearch

client = Elasticsearch("http://localhost:9200")
RECIPES_INDEX = 'recipes'

MAPPINGS = {
    "properties": {
        "name": {"type": "text"},
        "description": {"type": "text"},
        "categories": {"type": "text"},
        "steps": {"type": "text"},
        "author": {"type": "text"},
        "likes": {"type": "integer"},
    }
}

SETTINGS = {
    "number_of_shards": 5,
    "analysis": {
        "analyzer": {
            "standard_analyzer": {
                "type": "custom",
                "tokenizer": "standard",
                "char_filter": ["html_strip"],
                "filter": ["lowercase"]
            },
            "email_analyzer": {
                "tokenizer": "uax_url_email"
            },
            "n-gram_analyzer": {
                "tokenizer": "ngram",
                "min_gram": 3,
                "max_gram": 10,
                "token_chars": ["letter"]
            }
        }
    }
}

"""
EXAMPLE_OF_QUERY = {
    "query": {
        "bool": {
            "must": [
                {"match": {"FIELD": "TEXT"}},
                {"match": {"FIELD": "TEXT"}}
            ],
            "filter": [
                {"term": {"FIELD": "TEXT"}}
            ],
            "should": [
                {"match": {"FIELD": "TEXT"}}
            ],
            "must_not": [
                {"match": {"FIELD": "TEXT"}}
            ]
        }
    }
}
"""


def create_recipes_index():
    if client.indices.exists(index=RECIPES_INDEX):
        return True
    return client.indices.create(index=RECIPES_INDEX, mappings=MAPPINGS, settings=SETTINGS)["acknowledged"]
    # {'acknowledged': True, 'shards_acknowledged': True, 'index': 'gl'}


def data_processing(data: dict):
    result = {}
    first_level = data["hits"]['hits']
    for hits in first_level:
        result[hits["_id"]] = hits["_source"]

    return result


def put_data():
    index = 'recipes'
    _doc = {
        'name': 'third recipe',
        'description': 'yammy',
        'steps': []
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


if __name__ == "__main__":
    create_recipes_index()
    # getting_recipes()
