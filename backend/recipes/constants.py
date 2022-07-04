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
        "likes": {"type": "text"},
        "favorite": {"type": "text"},
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