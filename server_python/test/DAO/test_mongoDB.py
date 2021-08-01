from server_python import config
from server_python.mongoDB import DAO


def test_get_database():
    db_connection = DAO()
    assert db_connection is not None


def test_insert_one_doc_to_mongo_db():
    db_connection = DAO()
    result = db_connection.insert_one_doc(config.COLLECTION, {"name": "John", "address": "Highway 37"})
    assert result is not None


def test_insert_many_doc_to_mongo_db():
    db_connection = DAO()
    mylist = [
        {"name": "Amy", "address": "Apple st 652"},
        {"name": "Hannah", "address": "Mountain 21"},
        {"name": "Michael", "address": "Valley 345"},
        {"name": "Sandy", "address": "Ocean blvd 2"},
        {"name": "Betty", "address": "Green Grass 1"},
        {"name": "Richard", "address": "Sky st 331"},
        {"name": "Susan", "address": "One way 98"},
        {"name": "Vicky", "address": "Yellow Garden 2"},
        {"name": "Ben", "address": "Park Lane 38"},
        {"name": "William", "address": "Central st 954"},
        {"name": "Chuck", "address": "Main Road 989"},
        {"name": "Viola", "address": "Sideway 1633"}
    ]
    result = db_connection.insert_many_docs(config.COLLECTION, mylist)
    assert result is not None


def test_read_collection():
    db_connection = DAO()
    results = db_connection.get_collection_items(config.COLLECTION)
    assert results is not None
