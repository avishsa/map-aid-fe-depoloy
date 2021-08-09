import React from "react";
import {  useFormContext } from "react-hook-form";
import {  formFields } from '../../../scheme/reportScheme';
export default function Checkbox({ label, id, className }) {
    const { register } = useFormContext(); // retrieve all hook methods
    return (<div id={`${id}Container`} className={`d-flex flex-row bd-highlight `}>
        <input className="form-check-input" type="checkbox" {...register(id)} />
        <label className="form-check-label mx-2">{label}</label>
    </div>);
}
