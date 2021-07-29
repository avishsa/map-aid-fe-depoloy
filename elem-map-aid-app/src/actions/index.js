

import {mockApi} from '../mock_apis/reports';
import { CREATE_REPORT } from './types';

export const createReport = formValues =>  async dispatch => {
        const createReportURL = "";        
        const promise = await mockApi(createReportURL,formValues);//await reports.post(createReportURL, formValues);
        dispatch({
            type: CREATE_REPORT,
            payload: promise.data// server response   promise.data
        })
    };

;