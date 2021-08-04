import {CREATE_REPORT} from '../actions/types';

export default (state ={}, action)=>{
    switch(action.type){
        case CREATE_REPORT:{
            
            return {...state,[action.payload.id]:action.payload};
        }
        default: return state;
    }
};