import React from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { reportFormSchema, formFields, colorsOptions } from '../../scheme/reportScheme';
import { getDateTime,getHHMM, getYYYYMMDD,getDateFromString } from "../../Utilities/TimeFormatter";
import { createReport } from "../../api/reports";
import '../../css/report/createReport.css';

import DateTime from "../boilerplate/form/DateTime";
import  DateTimePickerHE from "../boilerplate/form/DateTimePickerHE";
import DistressedGroup from "./ReportCreate/DistressedGroup";
import MapGroup from "./ReportCreate/MapGroup";
import HomelessDetails from "./ReportCreate/HomelessDetails";
import ReporterDetails from "./ReportCreate/ReporterDetails";


const location = { location_text: "בורלא 29, תל אביב", location_json: { lon: 32.1616, lat: 32.1514 } };




export default function ReportCreate(props) {

    const defaultValues = {
        "notify_me": false,
        "report_datetime": getDateTime(new Date()),
        "report_date": getYYYYMMDD(new Date()),
        "report_time": getHHMM(new Date()),
        "person_shirt_color": "",
        "person_pants_color": "",

    }
    const methods = useForm({
        mode: 'onBlur',
        defaultValues,
        resolver: yupResolver(reportFormSchema)
    });
    const onSubmit = data => {
        console.log(data,data[formFields.reportDate]);
        
        
        data["report_datetime"] = getDateFromString(getYYYYMMDD(data["report_date"]),data["report_time"]);
        createReport({ ...data, ...location })
        console.log(data);
    };


    return (<div id="formContainer" className="d-flex flex-column justify-content-center">
        <h1 className="text-end"> מילוי טופס דיווח</h1>
        <FormProvider {...methods}>
            <form id="createReport" className="form-inline needs-validation" noValidate onSubmit={methods.handleSubmit(onSubmit)}>
                <DistressedGroup />              
                
                <DateTimePickerHE/>
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


