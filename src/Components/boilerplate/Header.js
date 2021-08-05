import React, { Component } from "react";
import NavApp from "./NavApp.js";
import '../../css/boilerplate/Header.css';

class Header extends Component {
    render() {
        return (<header   className="d-flex flex-column-reverse justify-content-between">
            <img src="./images/logo-app.png" className="d-flex flex-row"  />
            <NavApp/>
        </header>)
    }
}
export default Header;