import React from 'react';
import { Redirect } from 'react-router';
import { Route } from 'react-router';


export default function ProtectedRoute({component: Component, roles, ...rest }) {
    
    
    return (
        <Route {...rest} render={props => {
            if (!sessionStorage.getItem('token')) {
                // not logged in so redirect to login page with the return url
                return <Redirect to={{ pathname: '/user/login', state: { from: '/' } }} />
            }

            // logged in so return component
            return <Component {...props} />
        }} />
    )

    //token ? component: <Redirect to={{ pathname: "/user/login", state: { from: "/" }}}/>;

}