import React from "react";
import AppLogo from "../images/logo-app.png";
export default function Home (){
 return (
     <div className="d-flex flex-row justify-content-center align-items-center" style={{minHeight:"480pt"}}>
 <img alt="map-aid" className="d-flex flex-row justify-content-center align-middle " src={AppLogo} style={{width:"250pt",height:"125pt"}}/>
 </div>
 );
}