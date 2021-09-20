import React, { useState } from "react";
import { Redirect } from "react-router";
import { isLogged, loggedUser } from "../../localStorage";




function LogoutUser() {

    localStorage.removeItem(isLogged);
    localStorage.removeItem(loggedUser);
    localStorage.setItem('isLogged',false);
    return <Redirect to="\report\map"/>;
}


export default LogoutUser;