import { userConstants } from '../constants/user.constants';
import { _login,_logout ,_islogged} from '../services/user.services';
import { history } from '../helps/history';

export const userActions = {
    login,
    logout,
    isLogged
};

function login(data, from) {
    return dispatch => {
        dispatch(request(data));

        _login(data)
            .then(
                res => { 
                    dispatch(success(res.data));                    
                  
                },
                error => {
                    dispatch(failure(error.toString()));                    
                }
            );
    };

    function request(data) { return { type: userConstants.LOGIN_REQUEST, data } }
    function success(data) { return { type: userConstants.LOGIN_SUCCESS, data } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    _logout();
    return { type: userConstants.LOGOUT };
}
function isLogged(){
    const logStatus = _islogged();
    return {type:userConstants.ISLOGGED,data:{logStatus}};
}

