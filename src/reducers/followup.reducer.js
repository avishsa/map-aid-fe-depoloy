

import { followupConstants } from '../constants/followup.constants';
export function followups(state = { items: {}, description: "" }, action) {
    switch (action.type) {
        case followupConstants.GET_FOLLOWUP_REQUEST: return { ...state };
        case followupConstants.GET_FOLLOWUP_SUCCESS: {
            const itemKey = action.data.report_id;
            const itemValue = action.data;
            const new_items = { ...state.items };
            if(!new_items[itemKey]) new_items[itemKey]= [];
            new_items[itemKey].push(itemValue);
            return { ...state, items: new_items };
        }
        case followupConstants.GET_FOLLOWUP_FAILURE: return { ...state };

        case followupConstants.CREATE_FOLLOWUP_REQUEST: { return { ...state }; }
        case followupConstants.CREATE_FOLLOWUP_SUCCESS: {
            
            const itemKey = action.data.report_id;
            const itemValue = action.data;
            const new_items = { ...state.items };
            if(!new_items[itemKey]) new_items[itemKey]= [];
            new_items[itemKey] = new_items[itemKey].push(itemValue);
            
            return {
                ...state
                , isShow: false
                , description: ""
            };
        }
        case followupConstants.CREATE_FOLLOWUP_FAILURE: { return { ...state }; }
        case followupConstants.SHOW_FOLLOWUP_MODAL: { return { ...state, isShow: action.data } }
        default: return state;
    }
}