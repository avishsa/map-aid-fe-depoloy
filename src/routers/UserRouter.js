import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Redirect } from 'react-router';
import {  useSelector } from 'react-redux';
import UserLogin from '../Components/Users/UserLogin';


function UserRouter(){
  
  const loggedIn = useSelector(state => state.authentication.loggedIn);
    return (<Switch>  

    <Route exact path="/user/login" render={props=>
      loggedIn ? <Redirect to="/report/index"/>: <UserLogin />
     
    }/>
    
    
    <Route exact path="/user/" render={props=><Redirect to="/"/>}/>
    
  </Switch>)
}
export default  UserRouter;