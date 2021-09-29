import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Redirect } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import UserLogin from '../Components/Users/UserLogin';

import useToken from './Authentication/useToken';
function UserRouter(){
  
  const loggedIn = useSelector(state => state.authentication.loggedIn);
    return (<Switch>  

    <Route exact path="/user/login" render={props=>
      loggedIn ? <Redirect to="/report/index"/>: <UserLogin />
     
    }/>
    
    
    <Route exact path="/user/report/map" render={props=><Redirect to="/report/map"/>}/>
    
  </Switch>)
}
export default  UserRouter;