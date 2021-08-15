import React from "react";
import {  useFormContext } from "react-hook-form";
import {  formFields } from '../../../scheme/reportScheme';
export default function DistressedGroup() {
    const { register, watch, formState:{touchedFields} } = useFormContext(); // retrieve all hook methods
    
    let isTouchedDistressGroup = touchedFields[formFields.distressedText.name]!==undefined;
    
    return (<div className="d-flex flex-column bd-highlight">
        <div id="DistressedCBContainer" className="d-flex flex-row lign-items-start bd-highlight">
            <input
                id="distressedCB"
                type="checkbox"
                {...register(formFields.isDistressed.name)}
                className="form-check-input d-flex a"
            />
            <label id="distressedCBLabel" htmlFor="distressedCB"
                className="form-check-label mx-2">{formFields.isDistressed.label}</label>
        </div>
        {watch(formFields.isDistressed.name) && !isTouchedDistressGroup && (<input
            id="distressText"
            className="long-text-input form-control d-flex  flex-column float-end bd-highlight"
            {...register(formFields.distressedText.name)}
            defaultValue = {watch("person_general_description")}
            placeholder={formFields.distressedText.label}
        />)}
        {watch(formFields.isDistressed.name) && isTouchedDistressGroup && (<input
            id="distressText"
            className="long-text-input form-control d-flex  flex-column float-end bd-highlight"
            {...register(formFields.distressedText.name)}
            
            placeholder={formFields.distressedText.label}
        />)}
    </div>);
}