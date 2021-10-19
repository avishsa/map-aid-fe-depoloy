import { userConstants } from "../constants/user.constants";
export function users(state = { items: [] }, action) {
    switch (action.type) {
        case userConstants.GET_USER_REQUEST: { return { ...state }; }
        case userConstants.GET_USER_SUCCESS: return { ...state, selectedUser:action.data }
        case userConstants.GET_USER_FAILURE: { return { ...state }; }
        default: return state;
    }

}