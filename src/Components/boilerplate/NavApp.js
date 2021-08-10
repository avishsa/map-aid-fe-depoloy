import React, { Component }  from 'react';
class NavApp extends Component {
    render() {
        return (<nav className=" d-flex flex-row   navbar  navbar-light ">
            <ul className="d-flex flex-row p-0 m-0">
                <li className=" d-flex flex-row">
                    <a id="emergacyLink" className="nav-link" href="#">חירום <span className="sr-only">(current)</span></a>
                </li>
                <li className=" d-flex flex-row">
                    <a className="nav-link" href="#">כניסת משתמש <span className="sr-only">(current)</span></a>
                </li>
            </ul>
        </nav>);
    }
}
export default NavApp;