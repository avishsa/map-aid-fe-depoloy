import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { reportFormSchema } from '../../scheme/reportScheme';
import { getDateTime, getDateTimeFormattedString } from "../../Utilities/TimeFormatter";
import '../../css/report/createReport.css';

import { createReport } from "../../api/reports";
//

import DateTimePickerHE from "../boilerplate/form/DateTimePickerHE";
import DistressedGroup from "./ReportCreate/DistressedGroup";
import MapGroup from "./ReportCreate/MapGroup";
import HomelessDetails from "./ReportCreate/HomelessDetails";
import ReporterDetails from "./ReportCreate/ReporterDetails";


//const location = { location_text: "בורלא 29, תל אביב", location_json: { lon: 32.1616, lat: 32.1514 } };
const LOCATION = "בורלא 29, תל אביב";
const LON =34.789898,LAT=32.10854;
function ReportCreate() {

    const history = useHistory();
    const location = localStorage.getItem('location') ? localStorage.getItem('location') : LOCATION;
    const lon = localStorage.getItem('lng') ? localStorage.getItem('lng') : LON;
    const lat = localStorage.getItem('lat') ? localStorage.getItem('lat') : LAT;
    const [submitting, setSubmitting] = useState(false);
    let localStorageData;
    try {
        localStorageData = JSON.parse(localStorage.getItem("reportDate"));
    }
    catch {
        localStorageData = {};
    }
    const currData = localStorageData;

    const defaultValues = (currData !== null && currData["report_time"] !== undefined) ? currData : {
        "isNotify": false,
        "report_datetime": getDateTime(new Date()),
        "report_time": new Date(),
        "report_date": new Date(),
        "person_shirt_color": "#000000",
        "person_pants_color": "#000000",
    }
    const methods = useForm({
        mode: 'onBlur',
        defaultValues,
        resolver: yupResolver(reportFormSchema)
    });

    const onSubmit = (data, e) => {

        if (submitting) return;
        setSubmitting(true);
        localStorage.setItem('reportDate', JSON.stringify(data));
        data = {
            ...data,
            person_location: location,
            /*lon: lon,
            lat: lat,*/
            report_datetime: getDateTimeFormattedString(data["report_date"], data["report_time"])
        };
        delete data["report_date"];
        delete data["report_time"];

        const cr = createReport(data);
        
        cr
            .then(res => { setSubmitting(false); history.push("/report/success"); })
            .catch(res => { setSubmitting(false); history.push("/report/failure"); })


    };
    const onError = (errors, e) => {

    }
    const getErrorMsg = errorList => errorList[""]?.message;

    if (!localStorage.getItem('location')) {

        return <Redirect to="/report/map" />
    }

    return (<div id="formContainer" className="d-flex flex-column justify-content-center">
        <h1 className="text-end"> זיהוי דר רחוב</h1>

        <FormProvider {...methods}>
            <form
                id="createReport"
                className="form-inline needs-validation"
                noValidate
                onSubmit={
                    methods.handleSubmit(onSubmit, onError)
                }
            >
                <div className="mb-3">
                    <DistressedGroup />
                    <DateTimePickerHE />
                    <MapGroup location={location} />
                </div>
                <HomelessDetails />
                <ReporterDetails />
                <div className="wrapperRequiredFieldMsg d-flex flex-row mx-1">
                    <div className="requiredFieldMsg   d-flex flex-row required-astrix">
                        שדות חובה
                    </div>
                </div>
                <div className="wrapperRequiredFieldMsg d-flex flex-row mx-1">
                    <div id="errorForm" className="requiredFieldMsg   invalid-feedback d-flex flex-row ">
                        {
                            methods.formState.errors &&
                            getErrorMsg(methods.formState.errors)

                        }
                    </div>
                </div>
                <div id="buttonDiv" className="d-flex justify-content-center bd-highlight">
                    <input disabled={submitting}
                        id="submitBtn"
                        value="אישור ושליחה"
                        type="submit"
                        className=" redirectBtn btn text-center rounded-pill" />
                </div>

            </form>
        </FormProvider>
    </div>
    );
}


export default ReportCreate;