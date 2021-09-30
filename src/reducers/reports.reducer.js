import { reportConstants, reportFilterProperty, reportFilterCatagory } from "../constants/report.constants";

export function reports(state = {}, action) {
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
                    items_filtered: state?.items_catagory.filter(el => el.isDistressed)
                }
                case reportFilterProperty.MALE: return {
                    ...state,
                    items_filtered: state?.items_catagory.filter(el => el.person_gender === 'זכר')
                }
                case reportFilterProperty.FEMALE: return {
                    ...state,
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
                case 'incDate': return { items: state?.items.sort((el1, el2) => { return new Date(el2.report_datetime) - new Date(el1.report_datetime) }) };
                case 'decDate': return { items: state?.items.sort((el1, el2) => { return new Date(el1.report_datetime) - new Date(el2.report_datetime) }) };
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
                loadingUpdate: false,
                updateHandler: true,
                items: state?.items.map(report => report.id === reportId ? { ...report, user_id_handler: userId, isHandled: true } : report)
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
        default: return state;
    }
}