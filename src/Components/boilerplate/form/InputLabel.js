import React from "react";
import { useFormContext } from "react-hook-form";

export default function InputLabel({ className, type, label, id, classNameLabel, classNameInput }) {
    const { register, formState: { errors } } = useFormContext(); // retrieve all hook methods    
    return (<div className={`d-flex flex-column mx-1 ${className}`} >
        <label
            htmlFor={id}
            className={`d-flex form-label flex-row inputLabel ${classNameLabel}`}>
            {label}
        </label>
        <input
            {...register(id)}
            className={`form-control ${classNameInput}`}
            type={type}
            id={id}
        />
        <div className="d-flex flex-row  invalid-feedback">
            {errors[id] && errors[id].message}
        </div>


    </div>
    );
}