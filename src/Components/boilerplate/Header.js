import React, { Component } from "react";
import NavApp from "./NavApp.js";
import '../../css/boilerplate/Header.css';
import AppLogo from "../../images/logo-app.png";
class Header extends Component {
    render() {
        return (<header className=" container d-flex  flex-row">
            <div className="d-flex flex-column-reverse justify-content-start col-12 ">
                <div className="d-flex flex-row-reverse ">
                    <img src={AppLogo} /> 
                </div>
                <NavApp />
            </div>
        </header>)
    }
}
export default Header;