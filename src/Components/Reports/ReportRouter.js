import React from 'react';
import { Switch, Route } from "react-router-dom";
import ReportCreate from './ReportCreate';
import ReportSuccess from './ReportSuccess';
import ReportFailure from './ReportFailure';
function ReportRouter(){
    return (<Switch>
      
    <Route exact path="/report/create" component={ReportCreate} />
    <Route exact path="/report/success" component={ReportSuccess} />
    <Route exact path="/report/failure" component={ReportFailure} />
    <Route exact path="/report/map" component={ReportFailure} />
    
  </Switch>)
}
export default  ReportRouter;