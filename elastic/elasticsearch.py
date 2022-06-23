import random

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

NAMES = ["", "", ""]
DESCRIPTIONS = ["", "", ""]
CATEGORIES = ["", "", ""]
STEPS = ["", "", ""]
AUTHOR = ["", "", ""]
LIKES = ["", "", ""]


def create_recipes_index():
    if client.indices.exists(index=RECIPES_INDEX):
        return True
    return client.indices.create(index=RECIPES_INDEX, mappings=MAPPINGS, settings=SETTINGS)["acknowledged"]
    # {'acknowledged': True, 'shards_acknowledged': True, 'index': 'gl'}


def create_random_recipes(count_of_recipes: int):
    for i in count_of_recipes:
        _name = random.randint(0, NAMES.count())
        _description = random.randint(0, DESCRIPTIONS.count())


if __name__ == "__main__":
    # if create_recipes_index():
    #     print("=== Index already exist ===")
    # print("=== Were some problems with index ===")

    print(NAMES.count())
