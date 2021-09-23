import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Redirect } from 'react-router';
import ReportCreate from '../Components/Reports/ReportCreate';
import ReportSuccess from '../Components/Reports/ReportSuccess';
import ReportFailure from '../Components/Reports/ReportFailure';
import ReportMap from "../Components/Reports/ReportMap";
import ProtectedRoute from './Authentication/ProtectedRoute';
import ReportIndex from  "../Components/Reports/ReportIndex";

function ReportRouter() {
  const user = JSON.parse(sessionStorage.getItem('user'));
  return (<Switch>
    <Route exact path="/report/create" component={ReportCreate} />
    <ProtectedRoute
      path="/report/Index"    
      component={<ReportIndex user={user}/>}
       />
    <Route exact path="/report/success" component={ReportSuccess} />
    <Route exact path="/report/report/map" render={props=><Redirect to="/report/map"/>} />
    <Route exact path="/report/report/index" render={props=><Redirect to="/report/index"/>} />
    <Route exact path="/report/failure" component={ReportFailure} />
    <Route exact path="/report/map" component={ReportMap} />

  </Switch>)
}
export default ReportRouter;