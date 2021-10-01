import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';
import ReportCreate from '../Components/Reports/ReportCreate';
import ReportSuccess from '../Components/Reports/ReportSuccess';
import ReportFailure from '../Components/Reports/ReportFailure';
import ReportMap from "../Components/Reports/ReportMap";
import ProtectedRoute from './Authentication/ProtectedRoute';
import ReportIndex from "../Components/Reports/ReportIndex";

function ReportRouter() {
  
  const report = useSelector(state => state?.reports?.saveReport);
  return (<Switch>
    <Route exact path="/" render={props => <ReportMap />} />
    <Route
      exact
      path="/report/create"
      render = {props=>{return report?<ReportCreate/>:<Redirect to="/"/>}}
    />
    <ProtectedRoute
      exact
      path="/report/Index"
      component={ReportIndex}
    />
    <Route exact path="/report/success" component={ReportSuccess} />    
    <Route exact path="/report/failure" component={ReportFailure} />
  </Switch>)
}
export default ReportRouter;