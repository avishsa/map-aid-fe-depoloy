from server_python import mongoDB, config
import time
import json


def validate_data(logging, **kwargs):
    print(kwargs)
    valid_data = {}
    logging.info('validate data')
    try:
        for key, val in kwargs.items():
            if key == 'reporter_phone_number' and val:
                try:
                    val = int(val)
                    valid_data[key] = val
                except ValueError as e:
                    logging.error(f'invalid phone number. error message: {str(e)}')
                    valid_data[key] = None
            elif key == 'report_timestamp' and val:
                try:
                    time.strptime(val, '%Y-%m-%d %H:%M:%S')
                    valid_data[key] = val
                except ValueError as e:
                    logging.error(f'invalid timestamp. error message: {str(e)}')
                    valid_data[key]= None
            elif key == 'person_gender' and val:
                if val.lower() != 'female' or val.lower() != 'male':
                    logging.error(f'invalid person gender {val}')
                    valid_data[key] = None
            else:
                valid_data[key] = val

        data_access_layer(logging, json.dumps(valid_data))

    except Exception as e:
        logging.error(f"error to validate data. Error message {str(e)}")


def data_access_layer(logging, document):
    try:
        mongoDB.insert_one_doc_to_mongoDB(mongoDB.get_database(), config.COLLECTION, document)
    except Exception as e:
        logging.error(f"error, message: {str(e)}")
