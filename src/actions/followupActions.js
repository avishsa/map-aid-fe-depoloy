
import { followupConstants } from '../constants/followup.constants';
import {_getFollowupsByReportId,_createFollowup} from '../services/followup.services';


export const followupActions = {
    
    getFollowupsByReportId,
    createFollowup,
    createFollowupShowModal
};

function getFollowupsByReportId(reportId) {  
    return dispatch => {
        dispatch(request(reportId));
        
        _getFollowupsByReportId(reportId)
            .then(
                res => {                                                                         
                    if(res?.err)  dispatch(failure(res.err.toString()));                    
                    else {
                        dispatch(success(res));
                    }                                      
                },
                
            );
    };

    function request(data) { return { type: followupConstants.GET_FOLLOWUP_REQUEST,data } }
    function success(data) { return { type: followupConstants.GET_FOLLOWUP_SUCCESS,data } }
    function failure(error) { return { type: followupConstants.GET_FOLLOWUP_FAILURE, error } }
}
//{user_id,followupDescription,reportId}
function createFollowup(data){    
     return dispatch => {
         
        dispatch(request(data));    
        _createFollowup(data)
            .then(
                res => {                                                       
                    if(res?.err)  dispatch(failure(res.err.toString()));                    
                    else {dispatch(success(res?.data));}                                      
                },
                
            );
    };
    function request(data) {return { type: followupConstants.CREATE_FOLLOWUP_REQUEST,data } }
    function success(data) {return { type: followupConstants.CREATE_FOLLOWUP_SUCCESS, data } }
    function failure(error) { return { type: followupConstants.CREATE_FOLLOWUP_FAILURE, error } }
}
function createFollowupShowModal(isShow){
    return {type:followupConstants.SHOW_FOLLOWUP_MODAL,data:isShow}
}

