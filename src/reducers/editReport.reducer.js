import { reportConstants } from "../constants/report.constants";
export function editReport(state = { }, action) {
    switch (action.type) {
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

        case reportConstants.UNASSIGN_SET_REQUEST: {
            return {
                ...state,
                loadingUpdate: true
            };
        }
        case reportConstants.UNASSIGN_SET_SUCCESS: {
            const reportId = action.reportId;

            return {
                ...state,
                loadingUpdate: false,
                updateHandler: true,
                items: state?.items.map(report => report.id === reportId ? { ...report, user_id_handler: null, isHandled: false } : report),
                items_catagory: state?.items_catagory.map(report => report.id === reportId ? { ...report, user_id_handler: null, isHandled: false } : report),
                items_filtered: state?.items_filtered.map(report => report.id === reportId ? { ...report, user_id_handler: null, isHandled: false } : report),
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

            return {
                ...state,
                loadingUpdate: false,
                updateHandler: true,
                items: state?.items.map(report => report.id === reportId ? { ...report, status } : report),
                items_catagory: state?.items_catagory.map(report => report.id === reportId ? { ...report, status } : report),
                items_filtered: state?.items_filtered.map(report => report.id === reportId ? { ...report, status } : report),
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