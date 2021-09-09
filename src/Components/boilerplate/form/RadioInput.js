import React from "react";
import {  useFormContext } from "react-hook-form";

export default function RadioInput({ name, label, className,classLabel,styleLabel, listOptions }) {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="d-flex flex-column mb-3">
            {label &&<label htmlFor={name}
                className={`d-flex form-label flex-row ${className}`}   >{label}</label>}

            <div className="d-flex flex-row">
                {
                    listOptions.map(({ value, label }, index) => (<div className="mx-1" key={index}>
                        <input
                            {...register(name)}
                            type="radio"
                            className="form-check-input"
                            id={value}
                            name={name}
                            value={value}
                            style = {styleLabel}
                            autoComplete="off"
                        />
                        <label
                            className={`${classLabel} form-check-label mx-1`}
                            htmlFor={value}
                            >
                            {label}
                        </label>
                        

                    </div>))
                }

            </div>
            <div className="d-flex flex-row invalid-feedback" id={`errMsg${name}`}>

                {errors[name] && errors[name].message}


            </div>
        </div>
    );
}