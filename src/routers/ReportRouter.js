import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Redirect } from 'react-router';
import ReportCreate from '../Components/Reports/ReportCreate';
import ReportIndex from '../Components/Reports/ReportIndex';
import ReportSuccess from '../Components/Reports/ReportSuccess';
import ReportFailure from '../Components/Reports/ReportFailure';
import ReportMap from "../Components/Reports/ReportMap";
import { authToken } from '../api/users';
import { isLogged,loggedUser } from '../localStorage';


function ReportRouter() {
  const isAuthenticated = localStorage.getItem(isLogged);
  const loggedUserValue = localStorage.getItem(loggedUser);
  return (<Switch>
    <Route exact path="/report/create" component={ReportCreate} />
    <Route exact path="/report/Index" render={props => {
     
      console.log(localStorage.getItem('isLogged'));
      if(isAuthenticated ==="true" && loggedUserValue ){ 
        console.log(isAuthenticated)
         return <ReportIndex {...props} />
      } else{
        console.log(isAuthenticated);
        return <Redirect
          to={{
            pathname: "/user/login",

          }}
        />}
    }
    }
    />
    <Route exact path="/report/success" component={ReportSuccess} />
    <Route exact path="/report/failure" component={ReportFailure} />
    <Route exact path="/report/map" component={ReportMap} />

  </Switch>)
}
export default ReportRouter;