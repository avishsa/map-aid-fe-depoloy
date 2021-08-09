import React from "react";
import {  useFormContext } from "react-hook-form";
import {  formFields } from '../../../scheme/reportScheme';
export default function MapGroup({ location }) {
    return (
        <div id="locationTextContainer" className="d-flex flex-column">
            <label className="form-label required-astrix d-flex flex-row" htmlFor={formFields.locationText}> מיקום
            </label>
            <div id="" className=" d-flex  flex-row justify-content-between">
                <input id="locationTextInput" value={location}
                    className="form-control text-end" disabled />
                <button id="locationChangeBtn" className=" btn-sm form-control btn mx-1" onClick={() => { console.log("redirect to map") }}>שינוי</button>
            </div>
        </div>
    );
}