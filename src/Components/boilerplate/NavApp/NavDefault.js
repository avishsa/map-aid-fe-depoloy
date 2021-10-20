import React from 'react';

import { history } from '../../../helps/history';
export default function NavDefault() {


    return (<nav className=" d-flex flex-row   navbar  navbar-light ">
        <ul className="d-flex flex-row p-0 m-0">

            <li className=" d-flex flex-row">
                <button className="btn text-primary nav-link" style={{ border: 0, boxShadow: "none" }} onClick={() => { history.push('/user/login'); }} >כניסת משתמש </button>
            </li>
            <li className=" d-flex flex-row">
                <button className="btn text-primary nav-link"
                    id="emergacyLink"
                    style={{ border: 0, boxShadow: "none" }}
                    onClick={() => { window.open('tel:106'); }} >חירום </button>
            </li>


        </ul>
    </nav>);

}
