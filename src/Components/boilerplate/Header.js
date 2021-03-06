import React from "react";
import NavApp from "./NavApp.js";
import '../../css/boilerplate/Header.css';
import AppLogo from "../../images/logo-app.png";
export default function Header() {
    
        return (<header className="sticky-top d-flex  flex-row p-0 m-0 pb-3" style={{"backgroundColor": "rgb(233, 236, 241)"}} >
            <div style={{position:"relative"}} className="d-flex flex-column-reverse justify-content-start col-12 ">
                <div className="d-flex flex-row justify-content-end" style={{position:"relative",bottom:"13pt"}} >
                    <img src={AppLogo} alt="logo elem" /> 
                </div>
                <NavApp />
            </div>
        </header>)
    
}
