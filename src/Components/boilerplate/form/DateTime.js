import React from "react";
import { useFormContext } from "react-hook-form";
import { formFields } from '../../../scheme/reportScheme';
import InputLabel from "./InputLabel";
export default function Basicinfo({ dir, type, label, id, classNameLabel, classNameInput }) {
    return (<div className="d-flex flex-row ">
        <InputLabel
            type="date"
            label={formFields.reportDate.label}
            id={formFields.reportDate.name}
            classNameLabel='required-astrix'
            classNameInput="d-flex flex-row "
            className = "col-6"
        />
        <InputLabel
            type="time"
            label={formFields.reportTime.label}
            id={formFields.reportTime.name}
            classNameLabel='required-astrix'
            classNameInput="d-flex flex-row "
            className = "col-5"
        />
        

    </div>
    )
}