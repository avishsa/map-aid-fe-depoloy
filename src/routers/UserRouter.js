import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Redirect } from 'react-router';
import UserLogin from '../Components/Users/UserLogin';
import UserLogout from '../Components/Users/UserLogout';

function UserRouter({setToken}){
  
  const token =  JSON.parse(sessionStorage.getItem('token'));
    return (<Switch>  

    <Route exact path="/user/login" render={props=>
      token ? <Redirect to="/report/index"/>: <UserLogin setToken={setToken}/>
     
    }/>
    
    <Route exact path="/user/logout" render={props=>
      token ? <UserLogout setToken={setToken}/>:   <Redirect to="/report/map"/>
     
    }/>
    <Route exact path="/user/report/map" render={props=><Redirect to="/report/map"/>}/>
    
  </Switch>)
}
export default  UserRouter;