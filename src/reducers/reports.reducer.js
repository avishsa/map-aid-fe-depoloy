
import { reportConstants, reportFilterProperty, reportFilterCatagory, reportStatus } from "../constants/report.constants";

export function reports(state = { items: [], property: "", items_filtered: [] }, action) {
    switch (action.type) {
        case reportConstants.GETALL_REQUEST:
            return {
                ...state,
                loading: true
            };
        case reportConstants.GETALL_SUCCESS: {
            if (!action.reports || action.reports.length === 0) return state;
            const new_items = [...state.items, ...action.reports];
            return {
                items: new_items.sort((el1, el2) => { return new Date(el2.report_datetime) - new Date(el1.report_datetime) }),
                items_catagory: new_items.sort((el1, el2) => { return new Date(el2.report_datetime) - new Date(el1.report_datetime) }),
                catagory: reportFilterCatagory.ANYBODY,
                items_filtered: new_items.sort((el1, el2) => { return new Date(el2.report_datetime) - new Date(el1.report_datetime) }),
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
                case reportFilterCatagory.NOBODY: funcFilter = el => el.status === reportStatus.PENDING; break;
                case reportFilterCatagory.ME: 
                
                    funcFilter = el => {                       
                        return el.status === reportStatus.HANDLED  && el.user_id_handler === action.userId;
                    }
                    break;
                
                case reportFilterCatagory.STATUS_DONE: funcFilter = el => el.status === reportStatus.DONE; break;
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
                case 'decDate': return {
                    ...state,
                    items_filtered: state?.items_filtered.sort((el1, el2) => { return new Date(el1.report_datetime) - new Date(el2.report_datetime) })
                };
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
            const funcMap = report => {
                return report.id === reportId ?
                    { ...report, status: reportStatus.HANDLED, user_id_handler: userId, isHandled: true }
                    : report
            }
            return {
                ...state,
                loadingUpdate: false,
                updateHandler: true,
                items: state?.items.map(funcMap),
                items_catagory: state?.items_catagory.map(funcMap),
                items_filtered: state?.items_filtered.map(funcMap),
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

        case reportConstants.UNASSIGN_SET_REQUEST: {
            return {
                ...state,
                loadingUpdate: true
            };
        }
        case reportConstants.UNASSIGN_SET_SUCCESS: {
            const reportId = action.reportId;
            const funcMap = report => {
                return report.id === reportId ? { ...report, status: reportStatus.PENDING, user_id_handler: null, isHandled: false } : report
            }
            return {
                ...state,
                loadingUpdate: false,
                updateHandler: true,
                items: state?.items.map(funcMap),
                items_catagory: state?.items_catagory.map(funcMap),
                items_filtered: state?.items_filtered.map(funcMap),
            }

        }
        case reportConstants.UNASSIGN_SET_FAILURE: {
            return {
                ...state,
                loadingUpdate: false,
                updateHandler: false,
                error: action.error
            };
        }
        ///

        case reportConstants.UPDATESTATUS_SET_REQUEST: {
            return {
                ...state,
                loadingUpdate: true
            };
        }
        case reportConstants.UPDATESTATUS_SET_SUCCESS: {
            const reportId = action.reportId;
            const status = action.status;
            const funcMap = report => {
                return report.id === reportId ? { ...report, status: status } : report
            }
            return {
                ...state,
                loadingUpdate: false,
                updateHandler: true,
                items: state?.items.map(funcMap),
                items_catagory: state?.items_catagory.map(funcMap),
                items_filtered: state?.items_filtered.map(funcMap),
            }
        }
        case reportConstants.UPDATESTATUS_SET_FAILURE: {
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

        default: return state;
    }
}