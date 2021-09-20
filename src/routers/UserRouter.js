import React from 'react';
import { Switch, Route } from "react-router-dom";
import userLogin from '../Components/Users/userLogin';


function UserRouter(){
    return (<Switch>      
    <Route exact path="/user/login" component={userLogin} />
    
    
  </Switch>)
}
export default  UserRouter;