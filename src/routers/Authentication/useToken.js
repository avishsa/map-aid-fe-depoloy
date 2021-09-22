import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken;
    };
    const [tokenUser, setTokenUser] = useState(getToken());
    const saveToken = userToken => {
        if (!userToken)
            sessionStorage.removeItem('token');
        else
            sessionStorage.setItem('token', JSON.stringify(userToken));
        setTokenUser(userToken);
    };
    const deleteToken = () => {
        sessionStorage.removeItem('token');
        setTokenUser(undefined)
    }
    return {
        setToken: saveToken,
        delToken: deleteToken,
        token: tokenUser
    }
}