import React from "react";
import {  useFormContext } from "react-hook-form";
import {  formFields } from '../../../scheme/reportScheme';
export default function RadioInput({ name, label, className, listOptions }) {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="d-flex flex-column">
            <label htmlFor={name}
                className={`d-flex form-label flex-row ${className}`}   >{label}</label>

            <div className="d-flex flex-row">
                {
                    listOptions.map(({ value, label }, index) => (<div className="mx-1" key={index}>
                        <input
                            {...register(name)}
                            type="radio"
                            className="form-check-input"
                            id={value}
                            name={name}

                            autoComplete="off"
                        />
                        <label
                            className="form-check-label mx-1"
                            htmlFor={value}>
                            {label}
                        </label>
                        

                    </div>))
                }

            </div>
            <div className="d-flex flex-row invalid-feedback">

                {errors[name] && errors[name].message}


            </div>
        </div>
    );
}