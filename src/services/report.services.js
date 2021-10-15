
import { getReports, assignReport, createReport,updateStatusReport } from "../api/reports";


const _getAll = (user_id,token) => {
    return getReports(user_id, token)

        .then(({ data }) => {
            
            data = data.filter(el => el.isHandled === false || el.user_id_handler === user_id);
            return { data: data };
        })
        .catch(err => {  return { err: err } });
}
const _updateHandler = (reportId, reportHandlerId, userId) => {

    return assignReport(reportId, userId)
        .then(res => {            
            return { reportId, userId }
        })
        .catch(res => { return { res } });

}
const _createReport = data => {
    
    return createReport(data)
        .then(res => {
            if (res.data) {
                
                return { data: data };
            }
        })
        .catch(err => {  return { err: err }; })
}
const _updateStatus = (reportId,userId)=>{
    return updateStatusReport({reportId,userId})
    .then(res => {
        if (res.data) {
            return { reportId};
        }
    })
    .catch(err => { return { err: err }; })
}
export const reportService = {

    _getAll,
    _updateHandler,
    _createReport,
    _updateStatus

};