import React from 'react';
import { Redirect } from 'react-router';



export default function ProtectedRoute({component}) {
    
    const token =  sessionStorage.getItem('token');
    return token ? component: <Redirect to="/user/login"/>;

}