
import { reportConstants, reportFilterProperty, reportFilterCatagory } from "../constants/report.constants";

export function reports(state = { property: "" }, action) {
    switch (action.type) {
        case reportConstants.GETALL_REQUEST:
            return {
                loading: true
            };
        case reportConstants.GETALL_SUCCESS:
            return {
                items: action.reports,
                items_catagory: action.reports,
                catagory: reportFilterCatagory.ANYBODY,
                items_filtered: action.reports,
                property: reportFilterProperty.EMPTY,
            };
        case reportConstants.GETALL_FAILURE:
            return {
                error: action.error
            };
        case reportConstants.FILTER_BY_PROPERTY: {
            switch (action.filter) {
                case reportFilterProperty.DISTRESS: return {
                    ...state,
                    property: reportFilterProperty.DISTRESS,
                    items_filtered: state?.items_catagory.filter(el => el.isDistressed)
                }
                case reportFilterProperty.MALE: return {
                    ...state,
                    property: reportFilterProperty.MALE,
                    items_filtered: state?.items_catagory.filter(el => el.person_gender === 'זכר')
                }
                case reportFilterProperty.FEMALE: return {
                    ...state,
                    property: reportFilterProperty.FEMALE,
                    items_filtered: state?.items_catagory.filter(el => el.person_gender === 'נקבה')
                }

                default: throw new Error('filter parameter is invalid');
            }
        }
        case reportConstants.FILTER_BY_CATAGORY: {
            switch (action.filter) {
                case reportFilterCatagory.ANYBODY: return {
                    ...state,
                    items_catagory: state?.items,
                    items_filtered: state?.items,
                    catagory: reportFilterCatagory.ANYBODY,
                    property: reportFilterProperty.EMPTY
                };
                case reportFilterCatagory.NOBODY: return {
                    ...state,
                    items_catagory: state?.items.filter(el => !el.user_id_handler),
                    items_filtered: state?.items.filter(el => !el.user_id_handler),
                    catagory: reportFilterCatagory.NOBODY,
                    property: reportFilterProperty.EMPTY
                };
                case reportFilterCatagory.ME: return {
                    ...state,
                    items_catagory: state?.items.filter(el => el.user_id_handler === action.userId),
                    items_filtered: state?.items.filter(el => el.user_id_handler === action.userId),
                    catagory: reportFilterCatagory.ME,
                    property: reportFilterProperty.EMPTY
                };
                default: throw new Error('filter parameter is invalid');
            }
        }
        case reportConstants.SORT: {

            switch (action.orderName) {
                case 'incDate': return { ...state, items_filtered: state?.items_filtered.sort((el1, el2) => { return new Date(el2.report_datetime) - new Date(el1.report_datetime) }) };
                case 'decDate': return { ...state, items_filtered: state?.items_filtered.sort((el1, el2) => { return new Date(el1.report_datetime) - new Date(el2.report_datetime) }) };
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
        case reportConstants.CREATE_REPORT_REQUEST: return {
            ...state,
            loadingCreate: true
        }
        case reportConstants.CREATE_REPORT_SUCCESS: return {
            ...state,
            loadingCreate: false,
            createReport: true,
            newReport: action.report
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