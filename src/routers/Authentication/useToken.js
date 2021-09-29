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
    return {
        setToken: saveToken,
        token: tokenUser
    }
}