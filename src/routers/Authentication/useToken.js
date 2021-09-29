import { useState } from 'react';

export default function useToken() {
    const initToken = JSON.parse(sessionStorage.getItem('token'));
    const [tokenUser, setTokenUser] = useState(initToken);
    const saveToken = userToken => {
        userToken ?
            sessionStorage.setItem('token', JSON.stringify(userToken))
            :
            sessionStorage.removeItem('token');
        setTokenUser(userToken);
    };
    const checkToken = ()=>{
        return tokenUser===undefined;
    }
    return {
        setToken: saveToken,
        isLogged: checkToken,
        token: tokenUser
    }
}