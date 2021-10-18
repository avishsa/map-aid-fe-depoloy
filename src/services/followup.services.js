import { getReportFollowups,createFollowups } from "../api/fakeFollowUp";

export const _getFollowupsByReportId = (report_id) => {
    return getReportFollowups(report_id)

        .then(({ data }) => {                        
            return { data: data };
        })
        .catch(err => {  return { err: err } });
}