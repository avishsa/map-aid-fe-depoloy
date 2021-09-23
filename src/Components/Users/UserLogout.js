import React, { useState } from "react";
import { Redirect } from "react-router";
import { isLogged, loggedUser } from "../../localStorage";
import { useHistory } from "react-router-dom";
import useToken from "../../routers/Authentication/useToken";


function UserLogout({setToken}) {
    
    
    sessionStorage.removeItem('token');
    
    
    sessionStorage.removeItem('user');
    setToken(undefined);
    return <Redirect to="map"/>
    
}
export default UserLogout;