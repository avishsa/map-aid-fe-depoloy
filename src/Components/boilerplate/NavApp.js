import React from 'react';

import { useSelector } from 'react-redux';
import NavDefault from './NavApp/NavDefault';
import NavLogged from './NavApp/NavLogged';
export default function NavApp() {
    
    
    const loggedIn = useSelector(state => { return state.authentication.loggedIn});
    return (loggedIn ? <NavLogged/> : <NavDefault/>);

}
