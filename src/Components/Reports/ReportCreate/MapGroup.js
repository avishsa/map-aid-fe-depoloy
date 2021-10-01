import React from "react";
import { useDispatch } from "react-redux";
import { useFormContext } from "react-hook-form";

import { formFields } from "../../../scheme/reportScheme";
import { reportActions } from "../../../actions/reportActions";

export default function MapGroup() {
    const dispatch = useDispatch();
    const {register, watch } = useFormContext();
    
    
    return (
        <div id="locationTextContainer" className="d-flex flex-column">
            <label className="form-label required-astrix d-flex flex-row"> {formFields.location.label}
            </label>
            <div id="" className=" d-flex  flex-row justify-content-between">
                <input {...register(formFields.location.name)} 
                    className="form-control text-end" disabled
                     />
                <button 
                id="locationChangeBtn"
                className=" btn-sm form-control btn mx-1" 
                onClick={() => { 
                    dispatch(reportActions.saveReport(watch()));                    
                    }}>שינוי</button>
            </div>
        </div>
    );
}