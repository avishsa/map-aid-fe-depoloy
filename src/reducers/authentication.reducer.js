import { userConstants } from '../constants/user.constants';

let user = JSON.parse(sessionStorage.getItem('user'));
let token = JSON.parse(sessionStorage.getItem('token'));
const initialState = user ? { loggedIn: true, user,token } : {};

export function authentication(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                data: action.data
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                data: action.data
            };
        case userConstants.ISLOGGED:
            return {
                loggedIn:true
            }
        case userConstants.LOGIN_FAILURE:
            return {};
        case userConstants.LOGOUT:
            return {};
        default:
            return state
    }
}