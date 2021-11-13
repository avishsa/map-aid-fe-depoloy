import React from 'react';
import { Switch, Route } from "react-router-dom";
import About from "../Components/Info/About";
function InfoRouter() { 
    
    return (<Switch>
      <Route exact path="/About" 
      component={About}
       />     

    </Switch>)
  }
  export default InfoRouter;