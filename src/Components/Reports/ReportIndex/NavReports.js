import React, { Component }  from 'react';
import {filterParams} from "./indexConst";
export default function NavReports ({onChange}) {
    const  changeFilter =(filtername)=>{
        onChange(filtername);
    }
        return (<nav className=" d-flex flex-row navbar  navbar-light ">
            <ul className="d-flex flex-row p-0 m-0">
                <li className=" d-flex flex-row">
                    <a id="emergacyLink" 
                    onClick={()=>{changeFilter(filterParams.anybody)}} 
                    className="nav-link text-secondary" href="#">כל הדיווחים <span className="sr-only">(current)</span></a>
                </li>
                <li className=" d-flex flex-row">
                    <a className="nav-link text-danger" onClick={()=>{changeFilter(filterParams.me)}}>בטיפולי <span className="sr-only">(current)</span></a>
                </li>
                <li className=" d-flex flex-row">
                    <a className="nav-link text-success" onClick={()=>{changeFilter(filterParams.nobody)}}>חדשים <span className="sr-only">(current)</span></a>
                </li>                
            </ul>
        </nav>);
    
}
 