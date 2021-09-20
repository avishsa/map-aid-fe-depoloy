import React from 'react';
import { Route } from "react-router-dom";
import { Redirect } from 'react-router';
import ReportIndex from "../../Components/Reports/ReportIndex";
import { isLogged,loggedUser } from '../../localStorage';
export default function ProtectedRoute({ path }) {
    const isAuthenticated = localStorage.getItem(isLogged);
    const loggedUserValue = localStorage.getItem(loggedUser);
    return (<Route exact path="/report/Index" render={props => {

        if (isAuthenticated === "true" && loggedUserValue) {
            console.log(isAuthenticated)
            return <ReportIndex {...props} />
        } else {
            console.log(isAuthenticated);
            return <Redirect
                to={{
                    pathname: path,

                }}
            />
        }
    }
    }
    />

    )
}