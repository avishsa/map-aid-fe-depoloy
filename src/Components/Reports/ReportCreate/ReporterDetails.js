import React from "react";

import {  formFields } from '../../../scheme/reportScheme';
import InputLabel from "../../boilerplate/form/InputLabel";
import Checkbox from "../../boilerplate/form/Checkbox";

export default function ReporterDetails() {
    return (<div id="reporterIdDiv" className="containerForm d-flex flex-column  bd-highlight">
        <h4 className="text-end">פרטי המדווח/ת</h4>
        <div className="d-flex flex-row">
            <InputLabel
                type="text"
                label={formFields.reporterNameText.label}
                id={formFields.reporterNameText.name} />
            <InputLabel
                dir="ltr"
                type="text"
                label={formFields.reporterPhoneText.label}
                id={formFields.reporterPhoneText.name} />
        </div>
        <Checkbox
            type="checkbox"
            label={formFields.isNotify.label}
            id={formFields.isNotify.name} />
    </div>);
}