

import reports from './../apis/reports';
import { CREATE_REPORT } from './types';

export const createReport = formValues =>  async dispatch => {
        const createReportURL = "";        
        // const promise = await reports.post(createReportURL, formValues);
        dispatch({
            type: CREATE_REPORT,
            payload: {id:1,name:"Avishag"}//promise.data
        })
    };

;