import React from "react";
import {  useFormContext } from "react-hook-form";
import {  formFields } from '../../../scheme/reportScheme';
export default function DistressedGroup() {
    const { register, watch } = useFormContext(); // retrieve all hook methods
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
        {watch(formFields.isDistressed.name) && (<input
            id="distressText"
            className="long-text-input form-control d-flex  flex-column float-end bd-highlight"
            {...register(formFields.descriptionText.name)}
            placeholder={formFields.descriptionText.label}
        />)}
    </div>);
}