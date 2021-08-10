import React from "react";
import {  useFormContext } from "react-hook-form";
import {  formFields ,colorsOptions} from '../../../scheme/reportScheme';
import RadioInput from "../../boilerplate/form/RadioInput";
import InputColorImage from "../../boilerplate/form/InputColorImage";
import InputLabel from "../../boilerplate/form/InputLabel";

export default function HomelessDetails() {
    
    
    return (<div id="homelessIdDiv" className="containerForm d-flex flex-column bd-highlight">
        <h4 className="text-end">זיהוי</h4>
        <RadioInput
            className="required-astrix"
            name={formFields.genderText.name}
            label={formFields.genderText.label}
            listOptions={formFields.genderText.options} />
        <InputColorImage colors={colorsOptions} imgSrc={formFields.tshirtColor.imgSrc} name={formFields.tshirtColor.name} />
        <InputColorImage colors={colorsOptions} imgSrc={formFields.trousersColor.imgSrc} name={formFields.trousersColor.name} />
        <InputLabel type="text" label={formFields.descriptionText.label} id={formFields.descriptionText.name} className="" />
    </div>);
}