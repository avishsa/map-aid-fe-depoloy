from flask import Flask, request, Response, jsonify
from server_python import report, user
import logging
import json


logging.basicConfig(
    level=logging.INFO,
    handlers=[ logging.FileHandler(r"DEBUG_api.log"), logging.StreamHandler()],
    format='%(asctime)s:%(levelname)s:%(message)s'
)

app = Flask(__name__)


@app.route("/api/report/health", methods=['POST'])
def get_health():
    pass


@app.route("/api/auth/user", methods=['POST'])
def get_user_page():

    try:
        json_req = json.loads(request.data.decode())
        logging.info(json_req)
        response = user.auth(
            logging,
            user_full_name=json_req.get('full_name'),
            org_name=json_req.get('org_name'),
            user_password=json_req.get('user_password'))

        status_code = Response(response=response, status=200)
        logging.info(status_code)
        return status_code

    except Exception as e:
        logging.error(f'Error: {str(e)}')


@app.route("/api/report/person", methods=['POST'])
def report_person():
    try:
        response = ''
        json_req = json.loads(request.data.decode())
        logging.info(json_req)
        if json_req.get('report_timestamp') is None or json_req.get('report_timestamp') == '':
            response = 'request is missing report_timestamp'
        elif json_req.get('person_location') is None or json_req.get('person_location') == '':
            response = 'request is missing person_location'
        elif json_req.get('person_gender') is None or json_req.get('person_gender') == '':
            response = 'request is missing person_gender'

        if response:
            status_code = Response(response=response, status=200)
            logging.info(status_code)
            return status_code

        report.validate_data(
            logging,
            adversity=json_req.get('adversity'),
            adversity_info=json_req.get('adversity_info'),
            person_location = json_req.get('person_location'),
            person_gender = json_req.get('person_gender'),
            person_shirt_color = json_req.get('person_shirt_color'),
            person_pants_color = json_req.get('person_pants_color'),
            person_general_description = json_req.get('person_general_description'),
            reporter_full_name = json_req.get('reporter_full_name'),
            reporter_phone_number = json_req.get('reporter_phone_number'),
            notify_me =json_req.get('notify_me'),
            report_timestamp = json_req.get('report_timestamp'))

        status_code = Response(response={'Looking Good!'},status=200)
        logging.info(status_code)
        return status_code

    except Exception as e:
        logging.error(f'Error: {str(e)}')


if __name__ == "__main__":
    app.run(host="0.0.0.0",debug=True)
