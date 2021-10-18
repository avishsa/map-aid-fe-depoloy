
import { followupConstants } from '../constants/followup.constants';
import {_getFollowupsByReportId} from '../services/followup.services';


export const followupActions = {
    selectReport,
    getFollowupsByReportId,
    // createFollowup
};
function selectReport(reportId){
    return {type: followupConstants.SELECT_REPORT,payload:reportId};
}
function getFollowupsByReportId(reportId) {    
    return dispatch => {
        dispatch(request(reportId));
        _getFollowupsByReportId(reportId)
            .then(
                res => {                                                        
                    if(res?.err)  dispatch(failure(res.err.toString()));                    
                    else {dispatch(success(reportId));}                                      
                },
                
            );
    };

    function request(data) { return { type: followupConstants.GET_FOLLOWUP_REQUEST,data } }
    function success(data) { return { type: followupConstants.GET_FOLLOWUP_SUCCESS,data } }
    function failure(error) { return { type: followupConstants.GET_FOLLOWUP_FAILURE, error } }
}



