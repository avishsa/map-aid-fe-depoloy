import React from "react";
import { useForm, Controller, FormProvider, useFormContext } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { reportFormSchema, formFields, colorsOptions } from '../../scheme/reportScheme';
import { getDateTime } from "../../Utilities/TimeFormatter";
import { createReport } from "../../mock_apis/reports";
import DatePicker from "./ReportCreate/DatePicker_HE";
import '../../css/report/createReport.css';
import DatePicker_HE from "./ReportCreate/DatePicker_HE";
//bjbjb

const location = { location_text: "בורלא 29, תל אביב", location_json: { lon: 32.1616, lat: 32.1514 } };

function DistressedGroup() {
    const { register, watch } = useFormContext(); // retrieve all hook methods
    return (<div className="d-flex flex-column bd-highlight">
        <div id="DistressedCBContainer" className="d-flex flex-row lign-items-start bd-highlight">
            <input
                id="distressedCB"
                type="checkbox"
                {...register(formFields.isDistressed.name)}
                className="form-check-input d-flex a"
            />
            <label id="distressedCBLabel" htmlFor="distressedCB"
                className="form-check-label mx-2">{formFields.isDistressed.label}</label>
        </div>
        {watch(formFields.isDistressed.name) && (<input
            id="distressText"
            className="long-text-input form-control d-flex  flex-column float-end bd-highlight"
            {...register(formFields.descriptionText.name)}
            placeholder={formFields.descriptionText.label}
        />)}
    </div>);
}
function MapGroup({ location }) {
    return (
        <div id="locationTextContainer" className="d-flex flex-column">
            <label className="form-label required-astrix d-flex flex-row" htmlFor={formFields.locationText}> מיקום
            </label>
            <div id="" className=" d-flex  flex-row justify-content-between">
                <input id="locationTextInput" value={location}
                    className="form-control text-end" disabled />
                <button id="locationChangeBtn" className=" btn-sm form-control btn mx-1" onClick={() => { console.log("redirect to map") }}>שינוי</button>
            </div>
        </div>
    );
}

function HomelessDetails() {
    return (<div id="homelessIdDiv" className="containerForm d-flex flex-column bd-highlight">
        <h4 className="text-end">זיהוי</h4>
        <RadioInput
            className="required-astrix"
            name={formFields.genderText.name}
            label={formFields.genderText.label}
            listOptions={formFields.genderText.options} />
        <InputColorImage imgSrc={formFields.tshirtColor.imgSrc} name={formFields.tshirtColor.name} />
        <InputColorImage imgSrc={formFields.trousersColor.imgSrc} name={formFields.trousersColor.name} />
        <InputLabel type="text" label={formFields.descriptionText.label} id={formFields.descriptionText.name} className="" />
    </div>);
}
function RadioInput({ name, label, className, listOptions }) {
    const { register, watch, formState: { errors, isDirty } } = useFormContext();

    return (
        <div className="d-flex flex-column">
            <label htmlFor={name}
                className={`d-flex form-label flex-row ${className}`}   >{label}</label>

            <div className="d-flex flex-row">
                {
                    listOptions.map(({ value, label }, index) => (<div className="mx-1" key={index}>
                        <label
                            className="form-check-label mx-1"
                            htmlFor={value}>
                            {label}
                        </label>
                        <input
                            {...register(name)}
                            type="radio"
                            className="form-check-input"
                            id={value}
                            name={name}

                            autoComplete="off"
                        />

                    </div>))
                }

            </div>
            <div className="d-flex flex-row invalid-feedback">

                {errors[name] && errors[name].message}


            </div>
        </div>
    );
}
function InputColorImage({ imgSrc, name }) {
    const { register, watch } = useFormContext(); // retrieve all hook methods
    const colorImg = Number(watch(name)) !== -1 ? colorsOptions[Number(watch(name)) - 1].value : "black";

    return (

        <div className="d-flex mt-3 flex-row " style={{ marginBottom: "20pt" }}>


            <div className="d-flex mt-1 px-2 flex-row col-4">
                {
                    watch(name) == "-1" ?
                        (<div className="">
                            טרם נבחר צבע</div>) :
                        imgSrc && <i
                            className="fas fa-tshirt  fa-3x "
                            style={{ color: colorImg }} ></i>
                }

            </div>
            <div className="d-flex flex-column ">

                <div className="d-flex flex-row ">
                    <input type='range'
                        {...register(name)}
                        min="1" max={colorsOptions.length}
                        className="text-end mx-2 d-flex flex-row form-range" />
                </div>
                <div className="d-flex flex-row justify-content-center">
                    {
                        colorsOptions.map(({ value, className }, index) =>


                            <label
                                key={`${index}_${name}`}
                                style={{ marginLeft: "2pt", height: "10pt", width: "15pt", backgroundColor: value }}
                                className='d-flex flex-row'
                            >
                            </label>
                        )
                    }
                </div>
            </div>
        </div>

    );
}
function ReporterDetails() {
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
function Checkbox({ label, id, className }) {
    const { register } = useFormContext(); // retrieve all hook methods
    return (<div id={`${id}Container`} className={`d-flex flex-row bd-highlight `}>
        <input className="form-check-input" type="checkbox" {...register(id)} />
        <label className="form-check-label mx-2">{label}</label>
    </div>);
}
function InputLabel({ dir,type, label, id, classNameLabel, classNameInput }) {
    const { register, formState: { errors, isSubmitted } } = useFormContext(); // retrieve all hook methods

    return (<div className="d-flex flex-column mx-1" >
        <label
            htmlFor={id}
            className={`d-flex form-label flex-row inputLabel ${classNameLabel}`}>
            {label}
        </label>
        <input
            {...register(id)}
            className={`form-control ${classNameInput}`}
            type={type}
            dir={dir? dir:"rtl"} />
        <div className="d-flex flex-row  invalid-feedback">
            {errors[id] && errors[id].message}
        </div>


    </div>
    );
}
// function InputDate({ }) {
//     const { control } = useFormContext();
//     return (<Controller        
//         render={({ field: { onChange, onBlur, value, ref } }) => (
//             <DatePicker_HE
//               onChange={onChange}
//               onBlur={onBlur}
//               selected={value}
//             />
//           )}
//         control={control}
//         valueName="selected"
//         name="report_date"
//         onChange={(date) => date}
//     />);
// }
export default function ReportCreate(props) {
    const defaultValues = {
        notify_me: false,
        report_datetime: getDateTime(new Date()),
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


