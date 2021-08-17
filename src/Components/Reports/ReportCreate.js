import React,{useState} from "react";
import { withRouter,useHistory } from "react-router-dom";

import { useForm,  FormProvider, useFormContext } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { reportFormSchema } from '../../scheme/reportScheme';
import { getDateTime, getDateTimeFormattedString } from "../../Utilities/TimeFormatter";
import '../../css/report/createReport.css';

import {createReport} from "../../api/reports";

import DateTimePickerHE from "../boilerplate/form/DateTimePickerHE";
import DistressedGroup from "./ReportCreate/DistressedGroup";
import MapGroup from "./ReportCreate/MapGroup";
import HomelessDetails from "./ReportCreate/HomelessDetails";
import ReporterDetails from "./ReportCreate/ReporterDetails";


// const location = { location_text: "בורלא 29, תל אביב", location_json: { lon: 32.1616, lat: 32.1514 } };
// const location = "בורלא 29, תל אביב";
function ReportCreate(props) {  
    const history = useHistory();
    const location = localStorage.getItem('location');
    const [submitting,setSubmitting] = useState(false);
    const defaultValues = {
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
        
        if(submitting) return;
        setSubmitting(true);
        data = { ...data,
            person_location:location,
            report_datetime:getDateTimeFormattedString(data["report_date"],data["report_time"]) 
        };
        delete data["report_date"];
        delete data["report_time"];
        createReport(data)
        .then(res=> {console.log(res);setSubmitting(false); history.push("/report/success");})
        .catch(res=> {console.log(res);setSubmitting(false); history.push("/report/failure");})
        
        
    };
    const onError = (errors, e) => {
        console.log("OnERr", errors, e);       
    }
    const getErrorMsg = errorList => errorList[""]?.message;
    console.log("OnERr", methods.formState.errors);
    return (<div id="formContainer" className="d-flex flex-column justify-content-center">
        <h1 className="text-end"> מילוי טופס דיווח</h1>
    
        <FormProvider {...methods}>
            <form id="createReport" className="form-inline needs-validation" noValidate onSubmit={methods.handleSubmit(onSubmit, onError)}>
                <DistressedGroup />
                <DateTimePickerHE />
                <MapGroup location={location} />
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


export default withRouter(ReportCreate);