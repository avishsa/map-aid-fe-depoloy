import {CREATE_REPORT} from '../actions/types';

export default (state ={}, action)=>{
    switch(action.type){
        case CREATE_REPORT:{
            console.log("CREATE_REPORT reducer");
            return {...state,[action.payload.id]:action.payload};
        }
        default: return state;
    }
};