import { reportConstants } from "../constants/report.constants";
const initialSaveReport = JSON.parse(localStorage.getItem('report'));
export function createReport(state = { temp: initialSaveReport,errorModal:false }, action) {
    switch (action.type) {
        case reportConstants.CREATE_REPORT_REQUEST: {

            return {
                ...state,
                loadingCreate: true,
                temp: action.report
            }
        }
        case reportConstants.CREATE_REPORT_SUCCESS: {
            return {
                ...state,
                loadingCreate: false,
                createReport: true,
                newReport: action.report,
                temp: null
            }
        }
        case reportConstants.CREATE_REPORT_FAILURE: return {
            ...state,
            loadingCreate: false,
            createReport: false,
            error: action.error
        }
        case reportConstants.SAVE_REPORT: {

            return {
                ...state,
                temp: action.report
            }
        }
        case reportConstants.SAVE_LOCATION: {

            return {
                ...state,
                temp: {
                    ...state?.saveReport,
                    person_location: action.report.person_location,
                    location_lng: action.report.location_lng,
                    location_lat: action.report.location_lat
                }
            }
        }
        case reportConstants.ERROR_MODAL:{
            return {
                ...state,
                errorModal:action.data
            }
        }
        default: return state;
    }
}