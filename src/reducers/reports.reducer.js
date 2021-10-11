
import { reportConstants, reportFilterProperty, reportFilterCatagory } from "../constants/report.constants";
const initialSaveReport = JSON.parse(localStorage.getItem('report'));
export function reports(state = { saveReport: initialSaveReport, property: "", items_filtered: [] }, action) {
    switch (action.type) {
        case reportConstants.GETALL_REQUEST:
            return {
                loading: true
            };
        case reportConstants.GETALL_SUCCESS: {

            return {
                items: action.reports.sort((el1, el2) => { return new Date(el2.report_datetime) - new Date(el1.report_datetime) }),
                items_catagory: action.reports.sort((el1, el2) => { return new Date(el2.report_datetime) - new Date(el1.report_datetime) }),
                catagory: reportFilterCatagory.ANYBODY,
                items_filtered: action.reports.sort((el1, el2) => { return new Date(el2.report_datetime) - new Date(el1.report_datetime) }),
                property: reportFilterProperty.EMPTY,
            };
        }
        case reportConstants.GETALL_FAILURE:
            return {
                error: action.error
            };
        case reportConstants.FILTER_BY_PROPERTY: {
            let funcFilter = null;
            switch (action.filter) {
                case reportFilterProperty.DISTRESS: funcFilter = el => el.isDistressed; break;
                case reportFilterProperty.MALE: funcFilter = el => el.person_gender === 'זכר'; break;
                case reportFilterProperty.FEMALE: funcFilter = el => el.person_gender === 'נקבה'; break;
                default: throw new Error('filter parameter is invalid');
            }
            return {
                ...state,
                property: action.filter,
                items_filtered: state?.items_catagory.filter(funcFilter)
            }
        }
        case reportConstants.FILTER_BY_CATAGORY: {
            let funcFilter = null;
            switch (action.filter) {
                case reportFilterCatagory.ANYBODY: break;
                case reportFilterCatagory.NOBODY: funcFilter = el => !el.user_id_handler; break;
                case reportFilterCatagory.ME: funcFilter = el => el.user_id_handler === action.userId; break;
                case reportFilterCatagory.STATUS_DONE: funcFilter = el => el.status === 'DONE'; break;
                default: throw new Error('filter parameter is invalid');
            }
            return {
                ...state,
                items_catagory: funcFilter ? state?.items.filter(funcFilter) : state?.items,
                items_filtered: funcFilter ? state?.items.filter(funcFilter) : state?.items,
                catagory: action.filter,
                property: reportFilterProperty.EMPTY
            }
        }
        case reportConstants.SORT: {
            switch (action.orderName) {
                case 'incDate': return {
                    ...state,
                    items_filtered: state?.items_filtered.sort((el1, el2) => { return new Date(el2.report_datetime) - new Date(el1.report_datetime) })
                };
                case 'decDate': return { ...state,
                     items_filtered: state?.items_filtered.sort((el1, el2) => { return new Date(el1.report_datetime) - new Date(el2.report_datetime) }) };
                default: throw new Error('invalid sort');
            }
        }
        case reportConstants.HANDLER_SET_REQUEST: {
            return {
                ...state,
                loadingUpdate: true
            };
        }
        case reportConstants.HANDLER_SET_SUCCESS: {
            const reportId = action.reportId;
            const userId = action.userId;

            return {
                ...state,
                loadingUpdate: false,
                updateHandler: true,
                items: state?.items.map(report => report.id === reportId ? { ...report, user_id_handler: userId, isHandled: true } : report),
                items_catagory: state?.items_catagory.map(report => report.id === reportId ? { ...report, user_id_handler: userId, isHandled: true } : report),
                items_filtered: state?.items_filtered.map(report => report.id === reportId ? { ...report, user_id_handler: userId, isHandled: true } : report),
            }

        }
        case reportConstants.HANDLER_SET_FAILURE: {
            return {
                ...state,
                loadingUpdate: false,
                updateHandler: false,
                error: action.error
            };
        }
        case reportConstants.HANDLER_SET_OCCUPIED: {
            return {
                ...state,
                updateHandler: false
            }
        }
        case reportConstants.CREATE_REPORT_REQUEST: {

            return {
                ...state,
                loadingCreate: true,
                saveReport: action.report
            }
        }
        case reportConstants.CREATE_REPORT_SUCCESS: {
            return {
                ...state,
                loadingCreate: false,
                createReport: true,
                newReport: action.report,
                saveReport: null
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
                saveReport: action.report
            }
        }
        case reportConstants.SAVE_LOCATION: {

            return {
                ...state,
                saveReport: {
                    ...state?.saveReport,
                    person_location: action.report.person_location,
                    location_lng: action.report.location_lng,
                    location_lat: action.report.location_lat
                }
            }
        }
        default: return state;
    }
}