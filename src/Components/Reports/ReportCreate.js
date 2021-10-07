import React from "react";
import { useDispatch, useSelector } from 'react-redux';


import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { reportFormSchema } from '../../scheme/reportScheme';
import { getDateTime } from "../../Utilities/TimeFormatter";
import '../../css/report/createReport.css';


import { reportActions } from "../../actions/reportActions";
//

import DateTimePickerHE from "../boilerplate/form/DateTimePickerHE";
import DistressedGroup from "./ReportCreate/DistressedGroup";
import MapGroup from "./ReportCreate/MapGroup";
import HomelessDetails from "./ReportCreate/HomelessDetails";
import ReporterDetails from "./ReportCreate/ReporterDetails";




function ReportCreate() {
    const dispatch = useDispatch();

    const loadingCreate = useSelector(state => state.reports.loadingCreate);

    const saveReport = useSelector(state => state.reports.saveReport);

    const defaultValues = (saveReport !== null && saveReport["report_time"] !== undefined) ? saveReport : {
        "isNotify": false,
        "report_datetime": getDateTime(new Date()),
        "report_time": new Date(),
        "report_date": new Date(),
        "person_shirt_color": "#000000",
        "person_pants_color": "#000000",
        ...saveReport

    }

    const methods = useForm({
        mode: 'onBlur',
        defaultValues,
        resolver: yupResolver(reportFormSchema)
    });

    const onSubmit = (data, e) => { if (!loadingCreate) dispatch(reportActions.createReport(data)); };
    const onError = (errors, e) => { }
    const getErrorMsg = errorList => errorList[""]?.message;

    window.onbeforeunload = e => {
        e.preventDefault();
        localStorage.setItem('report', JSON.stringify(methods.watch()));
    }


    return (<div id="formContainer" className="d-flex flex-column justify-content-center">
        <div className="headerPage ">
            <h1 className=" text-end"> זיהוי דר רחוב</h1>
        </div>
        <FormProvider {...methods}>
            <form
                id="createReport"
                style={{ marginTop: "60pt" }}
                className="form-inline needs-validation"
                noValidate
                onSubmit={methods.handleSubmit(onSubmit, onError)}
            >
                <div className="mb-3">
                    <DistressedGroup />
                    <DateTimePickerHE />
                    <MapGroup />
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
                    <input disabled={loadingCreate}
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