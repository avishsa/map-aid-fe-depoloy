import React, { useState } from "react";
import { Redirect } from "react-router";
import { isLogged, loggedUser } from "../../localStorage";
import { useHistory } from "react-router-dom";
import useToken from "../../routers/Authentication/useToken";


function UserLogout({setToken}) {
    setToken(undefined);
    sessionStorage.removeItem('user');    
    return <Redirect to="/report/map"/>
    
}
export default UserLogout;