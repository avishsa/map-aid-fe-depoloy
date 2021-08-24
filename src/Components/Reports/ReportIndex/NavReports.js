import React, { Component }  from 'react';
class NavReports extends Component {
    render() {
        return (<nav className=" d-flex flex-row navbar  navbar-light ">
            <ul className="d-flex flex-row p-0 m-0">
                <li className=" d-flex flex-row">
                    <a id="emergacyLink" className="nav-link" href="#">כל הדיווחים <span className="sr-only">(current)</span></a>
                </li>
                <li className=" d-flex flex-row">
                    <a className="nav-link" onClick={()=>{}}>בטיפולי <span className="sr-only">(current)</span></a>
                </li>
                <li className=" d-flex flex-row">
                    <a className="nav-link" onClick={()=>{}}>חדשים <span className="sr-only">(current)</span></a>
                </li>
                <li className=" d-flex flex-row">
                    <a className="nav-link" onClick={()=>{}}>בטיפול העמותה שלי <span className="sr-only">(current)</span></a>
                </li>
            </ul>
        </nav>);
    }
}
export default NavReports;