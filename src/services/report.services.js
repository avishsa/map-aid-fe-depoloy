
import { getReports, assignReport, createReport } from "../api/reports";

const _getAll = user_id => {
    return getReports()
        .then(({ data }) => {
            data = data.filter(el => el.isHandled === false || el.user_id_handler === user_id);
            return data;
        })
        .catch(err => { console.log(err); });
}
const _updateHandler = (reportId, reportHandlerId, userId) => {

    return assignReport(reportId, userId)
        .then(res => {
            return { reportId, userId }
        })
        .catch(res => { console.log("failure", res); });

}
const __createReport = data => {

    return createReport(data)
        .then(res => {
            return data;
        })
        .catch(err => err)
}
export const reportService = {

    _getAll,
    _updateHandler,
    __createReport

};