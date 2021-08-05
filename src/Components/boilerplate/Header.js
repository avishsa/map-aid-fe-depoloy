import React, { Component } from "react";
import NavApp from "./NavApp.js";
import '../../css/boilerplate/Header.css';
import AppLogo from "../../images/logo-app.png";
class Header extends Component {
    render() {
        return (<header className=" container w-50-xl d-flex m-5-xl flex-row justify-content-center">
            <div className="w-100 d-flex flex-column-reverse">
                <div className="d-flex flex-row justify-content-start">
                    <img src={AppLogo} /> 
                </div>
                <NavApp />
            </div>
        </header>)
    }
}
export default Header;