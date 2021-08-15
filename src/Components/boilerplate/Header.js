import React, { Component } from "react";
import NavApp from "./NavApp.js";
import '../../css/boilerplate/Header.css';
import AppLogo from "../../images/logo-app.png";
class Header extends Component {
    render() {
        return (<header className=" container d-flex  flex-row p-0 m-0 mb-3">
            <div style={{position:"relative"}} className="d-flex flex-column-reverse justify-content-start col-12 ">
                <div style={{position:"relative",right:"180pt",bottom:"20pt"}} >
                    <img src={AppLogo} alt="logo elem" /> 
                </div>
                <NavApp />
            </div>
        </header>)
    }
}
export default Header;