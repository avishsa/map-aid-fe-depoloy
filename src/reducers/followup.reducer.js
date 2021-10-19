
import { followupConstants } from '../constants/followup.constants';
export function followups(state = { items:[] }, action) {
    switch(action.type){        
        case followupConstants.GET_FOLLOWUP_REQUEST: return {...state};        
        case followupConstants.GET_FOLLOWUP_SUCCESS: {
            
            return {...state, items:action.data};
        }
        case followupConstants.GET_FOLLOWUP_FAILURE: return {...state} ;

        case followupConstants.CREATE_FOLLOWUP_REQUEST: return {...state};        
        case followupConstants.CREATE_FOLLOWUP_SUCCESS: {
            return {...state, 
            items:state.items.push(action.data)};
        }
        case followupConstants.CREATE_FOLLOWUP_FAILURE: return {...state} ;
        default: return state;
    }
}