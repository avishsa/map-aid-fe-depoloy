import { reportService } from "../services/report.services";
import { reportConstants } from "../constants/report.constants";

export const reportActions = {
    getAll,
    filterByProperty,
    filterByCatagory,
    sort,
    updateHandler
};
function getAll(user_id) {
    
    return dispatch => {
        dispatch(request());

        reportService._getAll(user_id)
            .then(
                reports => dispatch(success(reports)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: reportConstants.GETALL_REQUEST } }
    function success(reports) { return { type: reportConstants.GETALL_SUCCESS, reports } }
    function failure(error) { return { type: reportConstants.GETALL_FAILURE, error } }
}

function filterByProperty(propertyName) {
    return { type: reportConstants.FILTER_BY_PROPERTY, filter: propertyName };
}
function filterByCatagory(catagoryName,userId) {
    return { type: reportConstants.FILTER_BY_CATAGORY, filter: catagoryName,userId };
}
function sort(orderName) {
    return { type: reportConstants.SORT, orderName: orderName };
}
function updateHandler(reportId, reportHandlerId, userId) {
    if (reportHandlerId !== null && reportHandlerId !== undefined)
        return { type: reportConstants.HANDLER_SET_OCCUPIED }

    return dispatch => {
        dispatch(request());

        reportService._updateHandler(reportId, reportHandlerId, userId)
            .then(
                report => dispatch(success(reportId,userId)),
                error => dispatch(failure(error.toString()))
            );
    };
    function request() { return { type: reportConstants.HANDLER_SET_REQUEST } }
    function success(reportId,userId) { return { type: reportConstants.HANDLER_SET_SUCCESS, reportId,userId } }
    function failure(error) { return { type: reportConstants.HANDLER_SET_FAILURE, error } }
    
}