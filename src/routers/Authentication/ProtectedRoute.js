import React from 'react';
import { Redirect } from 'react-router';
import { Route } from 'react-router';
import {useSelector } from 'react-redux';

export default function ProtectedRoute({component: Component, roles, ...rest }) {
    
    const loggedIn = useSelector(state => state.authentication.loggedIn);
    
    return (
        <Route {...rest} render={props => {
            return loggedIn ?                
             <Component {...props} />:  <Redirect to={{ pathname: '/user/login', state: { from: '/' } }} />
        }} />
    )

    //token ? component: <Redirect to={{ pathname: "/user/login", state: { from: "/" }}}/>;

}