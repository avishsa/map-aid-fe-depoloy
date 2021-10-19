
import { followupActions } from '../actions/followupActions';
import { followupConstants } from '../constants/followup.constants';
export function followups(state = { items:{} ,description:""}, action) {
    switch(action.type){        
        case followupConstants.GET_FOLLOWUP_REQUEST: return {...state};        
        case followupConstants.GET_FOLLOWUP_SUCCESS: {
            debugger;
            state.items[action.data[0].report_id] = action.data
            return {...state};
        }
        case followupConstants.GET_FOLLOWUP_FAILURE: return {...state} ;

        case followupConstants.CREATE_FOLLOWUP_REQUEST: {debugger; return {...state}; }       
        case followupConstants.CREATE_FOLLOWUP_SUCCESS: {
            debugger;
            if(!state.items[action.data.report_id]){
                state.items[action.data.report_id]=[];
            }
            state.items[action.data.report_id].push(action.data);
            return {...state           
            ,isShow:false
            ,description:""
        };
        }
        case followupConstants.CREATE_FOLLOWUP_FAILURE: {debugger; return {...state} ;}
        case followupConstants.SHOW_FOLLOWUP_MODAL:{return {...state,isShow:action.data}}
        default: return state;
    }
}