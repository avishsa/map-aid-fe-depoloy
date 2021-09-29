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
  
 

  
  return (<Switch>
    <Route exact path="/report/create" component={ReportCreate} />
    <ProtectedRoute
    exact 
      path="/report/Index"    
      component={ReportIndex }
       />
    <Route exact path="/report/success" component={ReportSuccess} />
    <Route exact path="/report/report/map" render={props=><Redirect to="/report/map"/>} />
    <Route exact path="/report/report/index" render={props=><Redirect to="/report/index"/>} />
    <Route exact path="/report/failure" component={ReportFailure} />
    <Route exact path="/report/map" component={ReportMap} />

  </Switch>)
}
export default ReportRouter;