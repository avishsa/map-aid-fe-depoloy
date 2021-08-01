import json
from typing import List

from bson import ObjectId
from pymongo import MongoClient
from server_python import config


class DAO:
    def __init__(self):
        self.db_connection = self.get_db_connection()

    @staticmethod
    def get_db_connection() -> MongoClient:
        try:
            return MongoClient(config.CONNECTION_STRING)
        except Exception as e:
            print(f"error {str(e)}")
            return None

    def insert_one_doc(self, collection: str, document: json) -> ObjectId:
        try:
            db_collection = self.get_db_collection(collection)
            result = db_collection.insert_one(document)
            return result.inserted_id
        except TypeError as e:
            print(f'error: {e}')
            return None
        except Exception as e:
            print(f'error: {e}')
            return None

    def insert_many_docs(self, collection, documents) -> List[ObjectId]:
        try:
            db_collection = self.get_db_collection(collection)
            result = db_collection.insert_many(documents)
            return result.inserted_ids
        except TypeError as e:
            print(f'error: {e}')
        except Exception as e:
            print(f'error: {e}')

    def get_db_collection(self, collection: str = config.COLLECTION, db_name: str = config.DB_NAME):
        return self.db_connection[db_name][collection]

    def get_collection_items(self, collection) -> List:
        try:
            db_collection = self.get_db_collection(collection)
            return list(db_collection.find({}))
        except TypeError as e:
            print(f'error: {e}')
        except Exception as e:
            print(f'error: {e}')
