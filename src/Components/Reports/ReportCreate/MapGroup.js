import React from "react";
import {useHistory } from "react-router-dom";


export default function MapGroup({ location }) {
    const history = useHistory();
    return (
        <div id="locationTextContainer" className="d-flex flex-column">
            <label className="form-label required-astrix d-flex flex-row"> מיקום
            </label>
            <div id="" className=" d-flex  flex-row justify-content-between">
                <input id="locationTextInput" value={location}
                    className="form-control text-end" disabled />
                <button 
                id="locationChangeBtn"
                className=" btn-sm form-control btn mx-1" 
                onClick={() => { history.push("/");}}>שינוי</button>
            </div>
        </div>
    );
}