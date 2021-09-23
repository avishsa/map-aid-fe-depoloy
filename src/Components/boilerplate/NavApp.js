import React, { useState } from 'react';
import useToken from "../../routers/Authentication/useToken";
export default function NavApp({ token }) {

    return (<nav className=" d-flex flex-row   navbar  navbar-light ">
        <ul className="d-flex flex-row p-0 m-0">

            <li className=" d-flex flex-row">
                {token ?
                    <a className="btn text-primary nav-link" href='\user\logout' >יציאת משתמש <span className="sr-only">(current)</span></a>
                    :
                    <a className="btn text-primary nav-link" href="\user\login" >כניסת משתמש <span className="sr-only">(current)</span></a>
                }
            </li>
            { token && 
            <li className=" d-flex flex-row">
                 <a className="btn text-primary nav-link" href="\report\index" >דיווחים <span className="sr-only">(current)</span></a>
            </li>
            }
            <li className=" d-flex flex-row">
                <a id="emergacyLink" className="nav-link" href="report\map"> דיווח חדש <span className="sr-only">(current)</span></a>
            </li>
        </ul>
    </nav>);

}
