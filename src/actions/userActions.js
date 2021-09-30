import { history } from '../helps/history';
import { userConstants } from '../constants/user.constants';
import { _login,_logout ,_islogged} from '../services/user.services';


export const userActions = {
    login,
    logout,
    isLogged
};

function login(data) {
    
    return dispatch => {
        dispatch(request(data));
        _login(data)
            .then(
                res => {                     
                    dispatch(success(res));
                    history.push("/");                    
                  
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

