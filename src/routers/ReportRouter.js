import React from 'react';
import { Switch, Route } from "react-router-dom";
import ReportCreate from '../Components/Reports/ReportCreate';
import ReportSuccess from '../Components/Reports/ReportSuccess';
import ReportFailure from '../Components/Reports/ReportFailure';
import ReportMap from "../Components/Reports/ReportMap";
import ProtectedRoute from './Authentication/ProtectedRoute';


function ReportRouter() {
  
  return (<Switch>
    <Route exact path="/report/create" component={ReportCreate} />
    <ProtectedRoute path="/report/Index"/>
    <Route exact path="/report/success" component={ReportSuccess} />
    <Route exact path="/report/failure" component={ReportFailure} />
    <Route exact path="/report/map" component={ReportMap} />

  </Switch>)
}
export default ReportRouter;