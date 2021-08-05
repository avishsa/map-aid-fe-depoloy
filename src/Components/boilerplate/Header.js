import React, { Component } from "react";
import NavApp from "./NavApp.js";
import '../../css/boilerplate/Header.css';

class Header extends Component {
    render() {
        return (<header style={{ width: "428pt"}}  className="d-flex flex-row justify-content-between">
            <img src="./images/logo-app.png" style={{ width: "131pt", height: "131pt" }} />
            <NavApp/>
        </header>)
    }
}
export default Header;