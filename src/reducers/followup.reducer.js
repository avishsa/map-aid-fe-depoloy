
import { followupConstants } from '../constants/followup.constants';
export function followup(state = { items:{} }, action) {
    switch(action.type){
        case followupConstants.SELECT_REPORT: {
            const reportId = action.payload;
            return {...state,reportId};}
        case followupConstants.GET_FOLLOWUP_REQUEST: return {...state};        
        case followupConstants.GET_FOLLOWUP_SUCCESS: return {...state, ...action.data};
        case followupConstants.GET_FOLLOWUP_FAILURE: return {...state} ;
        default: return state;
    }
}