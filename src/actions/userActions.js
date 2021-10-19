
import { userConstants } from '../constants/user.constants';
import { _login,_logout ,_islogged, _getUser} from '../services/user.services';
import { history } from "../helps/history";

export const userActions = {
    login,
    logout,
    isLogged,

    getUser
};

function login(data) {    
    return dispatch => {
        dispatch(request(data));
        _login(data)
            .then(
                res => {                                                        
                    if(res?.err)  dispatch(failure(res.err.toString()));                    
                    else {dispatch(success(res));}                                      
                },
                
            );
    };

    function request(data) { return { type: userConstants.LOGIN_REQUEST, data } }
    function success(data) { return { type: userConstants.LOGIN_SUCCESS, data } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {   
    _logout();
    history.push("/");
    return { type: userConstants.LOGOUT };
}
function isLogged(){
    const logStatus = _islogged();
    return {type:userConstants.ISLOGGED,data:{logStatus}};
}

function getUser(query){
    return dispatch => {
        dispatch(request(query));
        _getUser(query)
            .then(
                res => {                                                        
                    if(res?.err)  dispatch(failure(res.err.toString()));                    
                    else {dispatch(success(res.data));}                                      
                },
                
            );
    };

    function request(data) { return { type: userConstants.GET_USER_REQUEST, data } }
    function success(data) { return { type: userConstants.GET_USER_SUCCESS, data } }
    function failure(error) { return { type: userConstants.GET_USER_FAILURE, error } }
}