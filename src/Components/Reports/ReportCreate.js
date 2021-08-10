import React from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { reportFormSchema, formFields, colorsOptions } from '../../scheme/reportScheme';
import { getDateTime } from "../../Utilities/TimeFormatter";
import { createReport } from "../../api/reports";
import '../../css/report/createReport.css';
import DatePickerHE from "../boilerplate/form/DatePickerHE";
import  TimePicker from "../boilerplate/form/TimePicker";
import DistressedGroup from "./ReportCreate/DistressedGroup";
import MapGroup from "./ReportCreate/MapGroup";
import HomelessDetails from "./ReportCreate/HomelessDetails";
import ReporterDetails from "./ReportCreate/ReporterDetails";
import InputLabel from "../boilerplate/form/InputLabel";


const location = { location_text: "בורלא 29, תל אביב", location_json: { lon: 32.1616, lat: 32.1514 } };




export default function ReportCreate(props) {

    const defaultValues = {
        "notify_me": false,
        "report_datetime": getDateTime(new Date()),
        "person_shirt_color": "-1",
        "person_pants_color": "-1",

    }
    const methods = useForm({
        mode: 'onBlur',
        defaultValues,
        resolver: yupResolver(reportFormSchema)
    });
    const onSubmit = data => {
        console.log(data);
        data[formFields.tshirtColor.name] = data[formFields.tshirtColor.name] !== "-1" ?
            colorsOptions[Number(data[formFields.tshirtColor])] : "";
        data[formFields.trousersColor.name] = data[formFields.trousersColor.name] !== "-1" ?
            colorsOptions[Number(data[formFields.trousersColor.name])] : "";
        createReport({ ...data, ...location })
        console.log(data);
    };


    return (<div id="formContainer" className="container d-flex flex-column justify-content-center">
        <h1 className="text-end"> מילוי טופס דיווח</h1>
        <FormProvider {...methods}>
            <form id="createReport" className="form-inline needs-validation" noValidate onSubmit={methods.handleSubmit(onSubmit)}>
                <input type="time" value="18:00"/>
                <input type="date" value="2018-06-12"/>
                <input type="datetime-local" value="2018-06-12T19:30"/>
                <DatePickerHE/>
                <TimePicker/> 
                <DistressedGroup />              
                <InputLabel
                    type="datetime-local"
                    label={formFields.reportDateTime.label}
                    id={formFields.reportDateTime.name}                    
                    classNameLabel='required-astrix'
                    classNameInput="d-flex flex-row date-input"
                />
                <MapGroup location={location.location_text} />
                <HomelessDetails />
                <ReporterDetails />
                <div className="wrapperRequiredFieldMsg d-flex flex-row mx-1">
                    <div className="requiredFieldMsg   d-flex flex-row required-astrix">
                        שדות חובה
                    </div>
                </div>
                <div id="buttonDiv" className="d-flex justify-content-center bd-highlight">
                    <input id="submitBtn" value="אישור ושליחה" type="submit" className=" btn text-center rounded-pill" />
                </div>
            </form>
        </FormProvider>
    </div>
    );
}


