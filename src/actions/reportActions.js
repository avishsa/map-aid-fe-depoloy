import { history } from "../helps/history";
import { reportService } from "../services/report.services";
import { reportConstants, reportStatus } from "../constants/report.constants";
import { getDateTimeFormattedString } from "../Utilities/TimeFormatter";
export const reportActions = {
    getAll,
    getAllHandled,
    getAllPending,
    filterByProperty,
    filterByCatagory,
    sort,
    assignHandler,
    unassignHandler,
    updateStatus,

    createReport,
    saveReport,
    saveLocation

};
function getAll(user_id, token) {
    return dispatch => {
        dispatch(request());
        reportService._getAll(user_id, token)
            .then(
                res => {

                    if (res?.data) dispatch(success(res.data))
                    else {
                        if (res?.err) { dispatch(failure(res.err.toString())) }
                        else dispatch(failure("couldn't get reports"))
                    }
                }
            );
    };
    function request() { return { type: reportConstants.GETALL_REQUEST } }
    function success(reports) { return { type: reportConstants.GETALL_SUCCESS, reports } }
    function failure(error) { return { type: reportConstants.GETALL_FAILURE, error } }
}
function getAllHandled(user_id, token) {
    return getAll(user_id,token);
}
function getAllPending(token) {
    return getAll(null,token);
}
function filterByProperty(propertyName) {
    return { type: reportConstants.FILTER_BY_PROPERTY, filter: propertyName };
}
function filterByCatagory(catagoryName, userId) {
    return { type: reportConstants.FILTER_BY_CATAGORY, filter: catagoryName, userId };
}
function sort(orderName) {
    return { type: reportConstants.SORT, orderName: orderName };
}
function assignHandler(reportId, reportHandlerId, userId) {
    if (reportHandlerId !== null && reportHandlerId !== undefined)
        return { type: reportConstants.HANDLER_SET_OCCUPIED }

    return dispatch => {
        dispatch(request());

        reportService._updateHandler(reportId, reportHandlerId, userId)
            .then(
                report => dispatch(success(reportId, userId)),
                error => dispatch(failure(error.toString()))
            );
    };
    function request() { return { type: reportConstants.HANDLER_SET_REQUEST } }
    function success(reportId, userId) { return { type: reportConstants.HANDLER_SET_SUCCESS, reportId, userId } }
    function failure(error) { return { type: reportConstants.HANDLER_SET_FAILURE, error } }

}
function unassignHandler(reportId) {
    return dispatch => {
        dispatch(request());

        reportService._updateHandler(reportId)
            .then(
                report => dispatch(success(reportId)),
                error => dispatch(failure(error.toString()))
            );
    };
    function request() { return { type: reportConstants.UNASSIGN_SET_REQUEST } }
    function success(reportId, userId) { return { type: reportConstants.UNASSIGN_SET_SUCCESS, reportId, userId } }
    function failure(error) { return { type: reportConstants.UNASSIGN_SET_FAILURE, error } }

}

function saveReport(data) {

    return dispatch => {
        dispatch(request(data))
        history.push("/");
    }
    function request(data) { return { type: reportConstants.SAVE_REPORT, report: data } }
}
function saveLocation(location, lat, lng) {
    return { type: reportConstants.SAVE_LOCATION, report: { person_location: location, location_lat: lat, location_lng: lng } }
}
function createReport(data) {

    data = {
        ...data,
        report_datetime: getDateTimeFormattedString(data["report_date"], data["report_time"])
    };
    delete data["report_date"];
    delete data["report_time"];

    return dispatch => {

        dispatch(request(data));

        reportService._createReport(data)
            .then(
                res => {

                    if (res.err) {
                        dispatch(failure(res.err));
                        history.push("/report/failure");
                    }
                    if (res.data) {
                        dispatch(success(data));
                        localStorage.removeItem("report");
                        history.push("/report/success");
                    }
                    dispatch(failure("something went wrong"));
                }
            )
            .catch(error => {

                dispatch(failure(error.toString()));
                history.push("/report/failure");

            })
            ;
    };
    function request(data) { return { type: reportConstants.CREATE_REPORT_REQUEST, report: data } }
    function success(report) { localStorage.removeItem("report"); return { type: reportConstants.CREATE_REPORT_SUCCESS, report } }
    function failure(error) { return { type: reportConstants.CREATE_REPORT_FAILURE, error } }

}
function updateStatus(reportId, userId) {

    return dispatch => {
        dispatch(request());

        reportService._updateStatus(reportId, userId)
            .then(
                res => {

                    if (res.err) { dispatch(failure(res.err.toString())) }
                    else dispatch(success(reportId))

                }
            );
    };
    function request() { return { type: reportConstants.UPDATESTATUS_SET_REQUEST } }
    function success(reportId, userId) { return { type: reportConstants.UPDATESTATUS_SET_SUCCESS, data: { reportId, userId, status: reportStatus.DONE } } }
    function failure(error) { return { type: reportConstants.UPDATESTATUS_SET_FAILURE, error } }
}