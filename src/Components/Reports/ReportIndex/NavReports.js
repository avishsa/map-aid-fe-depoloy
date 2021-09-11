import React from 'react';
import {filterParams} from "./indexConst";
export default function NavReports ({onChange}) {
    const  changeFilter =(filtername)=>{
        onChange(filtername);
    }
        return (<nav className=" d-flex flex-row navbar  navbar-light ">
            <ul className="d-flex flex-row p-0 m-0">
                <li className=" d-flex flex-row">
                    <button id="emergacyLink" 
                    onClick={()=>{changeFilter(filterParams.anybody)}} 
                    className="nav-link btn text-secondary" >כל הדיווחים <span className="sr-only">(current)</span></button>
                </li>
                <li className=" d-flex flex-row">
                    <button className="nav-link btn text-danger" onClick={()=>{changeFilter(filterParams.me)}}>בטיפולי <span className="sr-only">(current)</span></button>
                </li>
                <li className=" d-flex flex-row">
                    <button className="nav-link btn text-success" onClick={()=>{changeFilter(filterParams.nobody)}}>חדשים <span className="sr-only">(current)</span></button>
                </li>                
            </ul>
        </nav>);
    
}
 