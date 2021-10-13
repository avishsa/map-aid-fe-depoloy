import { userConstants } from '../constants/user.constants';

let user = JSON.parse(sessionStorage.getItem('user'));
let token = JSON.parse(sessionStorage.getItem('token'));

const initialState = user ? { loggedIn: true, user, token } : {};

export function authentication(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                loggedIn: false,
                submitting: true,
                user: action.data,
                error: null
            };
        case userConstants.LOGIN_SUCCESS: {
            
            return {
                loggedIn: true,
                submitting:false,
                user: action.data,
                error: null
            };
        }
       
        case userConstants.LOGIN_FAILURE:
            return {
                loggedIn: false,
                submitting: false,
                error: action.error,
                user: undefined,
                token: undefined,
            };
        case userConstants.LOGOUT: {
            
            return {
                loggedIn: false,
                user: undefined,
                token: undefined,
                error: null
            };
        }

        default:
            return state;
    }
}