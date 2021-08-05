import React, { Component }  from 'react';
class NavApp extends Component {
    render() {
        return (<nav className="navbar navbar-expand-lg navbar-light ">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a id="emergacyLink" class="nav-link" href="#">חירום <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">כניסת משתמש <span class="sr-only">(current)</span></a>
                </li>
            </ul>
        </nav>);
    }
}
export default NavApp;