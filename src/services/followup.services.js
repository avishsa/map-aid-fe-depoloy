// import { getReportFollowups, createFollowups } from "../api/fakeFollowUp";
import { getReportFollowups, createFollowups } from "../api/followUps";
export const _getFollowupsByReportId = (report_id) => {
    return getReportFollowups({report_id})
        .then(({data}) => {
            return { data: data[0] };
        })
        .catch(err => { return { err: err } });
}
// user_id,followupDescription,reportId
export const _createFollowup = (followup) => {
    
    return createFollowups(followup)
        .then(( {data} ) => {
            
            return { data: data };
        })
        .catch(err => { return { err: err } });
}