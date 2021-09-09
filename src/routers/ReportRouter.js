import React from 'react';
import { Switch, Route } from "react-router-dom";
import ReportCreate from '../Components/Reports/ReportCreate';
import ReportIndex from '../Components/Reports/ReportIndex';
import ReportSuccess from '../Components/Reports/ReportSuccess';
import ReportFailure from '../Components/Reports/ReportFailure';
import ReportMap from "../Components/Reports/ReportMap";

function ReportRouter(){
    return (<Switch>      
    <Route exact path="/report/create" component={ReportCreate} />
    <Route exact path="/report/Index" component={ReportIndex} />
    <Route exact path="/report/success" component={ReportSuccess} />
    <Route exact path="/report/failure" component={ReportFailure} />
    <Route exact path="/report/map" component={ReportMap} />
    
  </Switch>)
}
export default  ReportRouter;