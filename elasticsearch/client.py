from elasticsearch import Elasticsearch

client = Elasticsearch("http://localhost:9200")


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


if __name__ == '__main__':
    print(put_data())
