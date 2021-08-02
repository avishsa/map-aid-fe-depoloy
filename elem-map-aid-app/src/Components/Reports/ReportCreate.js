import React from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { reportFormSchema, formFields } from '../../scheme/reportScheme';
import { getDateTime } from "../../Utilities/TimeFormatter";
import { createReport } from "../../mock_apis/reports";

import '../../css/report/createReport.css';

const location = { location_text: "בורלא 29, תל אביב", location_json: { lon: 32.1616, lat: 32.1514 } };

function DistressedGroup() {
    const { register, watch } = useFormContext(); // retrieve all hook methods
    return (<div className="mx-4">
        <div className="d-flex flex-row-reverse bd-highlight">
            <input
                id="distressedCB"
                type="checkbox"
                {...register(formFields.isDistressed.name)}
                className="form-check-input"
            />
            <label id="distressedCBLabel" htmlFor="distressedCB"
                className="form-check-label mx-2">{formFields.isDistressed.label}</label>
        </div>
        {watch(formFields.isDistressed.name) && (<input
            className="long-text-input form-control d-flex text-end flex-column float-end bd-highlight mt-1"
            {...register(formFields.descriptionText.name)}
            placeholder={formFields.descriptionText.label}
        />)}
    </div>);
}
function MapGroup({ location }) {
    return (<div className="form-row m-2 " id="locationField">
        <div className="w-50 d-flex flex-column float-end">
            <label className="form-label d-flex flex-row-reverse" htmlFor={formFields.locationText}> מיקום
            </label>
            <div className="d-flex flex-row-reverse">
                <input id="locationTextInput" value={location}
                    className=" short-text-input form-control text-end" disabled />
                <label id="locationChangeBtn" className="form-control btn btn-outline-secondary mx-2" onClick={() => { console.log("redirect to map") }}>שינוי</label>
            </div>
        </div>
    </div>);
}
function RequiredFields({ location }) {

    const { register, formState: { errors, isSubmitted } } = useFormContext(); // retrieve all hook methods    
    console.log("DATEPPP", errors);
    return (<div id="" className="container d-flex flex-column bd-highlight">

        <div className="d-flex flex-row-reverse">
            <div className="form-group required mx-2 mt-2" >
                <label
                    htmlFor={formFields.reportDate.name}
                    className="d-flex form-label flex-row-reverse">
                    {formFields.reportDate.label}
                </label>
                <input
                    type="datetime-local"
                    className="form-control "
                    {...register(formFields.reportDate.name)}

                />
                <div className="d-flex text-end flex-row-reverse float-end valid-feedback">
                    {errors && !errors[formFields.reportDate.name] && isSubmitted && 'נראה טוב'}
                </div>
                <div className="d-flex text-end flex-row-reverse float-end invalid-feedback">

                    {errors[formFields.reportDate.name] && errors[formFields.reportDate.name].message}

                </div>

            </div>
        </div>
        <MapGroup location={location} />
    </div>
    );
}
function HomelessDetails() {
    return (<div id="homelessIdDiv" className="m-3 container d-flex flex-column bd-highlight">
        <h4 className="mx-4 text-end">זיהוי</h4>
        <RadioInput
            name={formFields.genderText.name}
            label={formFields.genderText.label}
            listOptions={formFields.genderText.options} />
        <InputColorImage imgSrc={formFields.tshirtColor.imgSrc} name={formFields.tshirtColor.name} />
        <InputColorImage imgSrc={formFields.trousersColor.imgSrc} name={formFields.trousersColor.name} />
        <InputLabel type="text" label={formFields.descriptionText.label} id={formFields.descriptionText.name} className="" />
    </div>);
}
function RadioInput({ name, label, listOptions }) {
    const { register,watch, formState: { errors,isDirty } } = useFormContext();
    
    return (
        <div className="d-flex mx-4 flex-column">
            <label htmlFor={name}
                className="d-flex form-label flex-row-reverse">{label}</label>

            <div className="d-flex flex-row-reverse form-group">

                {
                    listOptions.map(({ value, label, className }, index) => (<div key={index}>
                        <input
                            {...register(name)}
                            type="radio"
                            className="btn-check"
                            id={value}
                            autoComplete="off"
                        />
                        <label
                            className={`m-1 btn ${className}`}
                            htmlFor={value}>
                            {label}
                        </label>
                    </div>))
                }
                
            </div>
            <div className="d-flex flex-row-reverse text-end invalid-feedback">

                    {errors[name] && errors[name].message }
                    

                </div>
        </div>
    );
}
function InputColorImage({ imgSrc, name }) {
    const { register } = useFormContext(); // retrieve all hook methods
    return (<div className="mt-5 mx-3 d-flex flex-row-reverse">
        {imgSrc && <img className="" src={imgSrc} alt="tshirtColor" style={{ height: "50px", width: "50px" }} />}
        <div className=" mx-5">
            <input type='color' {...register(name)} list="colors" className=" form-control" style={{ height: "50px", width: "70px" }} />
            <datalist id="colors" className="float-end">
                <option >#000000</option>
                <option >#ff0000</option>
                <option>#0000ff</option>
                <option>#00ff00</option>
                <option>#ffff00</option>
                <option>#654321</option>
                <option>#808080</option>
                <option>#ffffff</option>
            </datalist>
        </div>
    </div>
    );
}
function ReporterDetails() {
    return (<div id="reporterIdDiv" className="mt-3  d-flex flex-column  bd-highlight">
        <h4 className="mb-3 text-end">פרטי המדווח/ת</h4>
        <div className="d-flex flex-row-reverse">
            <InputLabel
                type="text"
                label={formFields.reporterNameText.label}
                id={formFields.reporterNameText.name} />
            <InputLabel
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
function Checkbox({ label, id }) {
    const { register } = useFormContext(); // retrieve all hook methods
    return (<div className="mt-3 mx-1 d-flex flex-row-reverse bd-highlight">
        <input className="form-check-input" type="checkbox" {...register(id)} />
        <label className="form-check-label mx-2">{label}</label>
    </div>);
}
function InputLabel({ type, label, id }) {
    const { register, formState: { errors, isSubmitted } } = useFormContext(); // retrieve all hook methods

    return (<div className="form-group mx-2 mt-2 d-flex flex-column" >
        <label
            htmlFor={id}
            className="d-flex form-label flex-row-reverse">
            {label}
        </label>
        <input
            {...register(id)}
            className="form-control"
            type={type}
            dir="rtl" />
        <div className="d-flex text-end flex-row-reverse float-end invalid-feedback">
            {errors[id] && errors[id].message}
        </div>
        

    </div>
    );
}
export default function ReportCreate(props) {
    const defaultValues = {
        notify_me: false,
        report_date: getDateTime(new Date())
    }
    const methods = useForm({
        mode: 'onBlur',
        defaultValues,
        resolver: yupResolver(reportFormSchema)
    });
    const onSubmit = data => { console.log(data); createReport({ ...data, ...location }) };
    
    return (<div className="container w-75 d-flex flex-column">
        <h2 className="text-end"> מילוי טופס דיווח</h2>
        <FormProvider {...methods}>
            <form id="createReport" className="form-inline needs-validation" noValidate onSubmit={methods.handleSubmit(onSubmit)}>
                <DistressedGroup />
                <RequiredFields location={location.location_text} />
                <HomelessDetails />
                <ReporterDetails />
                <div id="buttonDiv" className="  mt-3 container d-flex justify-content-center bd-highlight">
                    <input id="submitBtn" value="אישור ושליחה" type="submit" className=" btn text-center rounded-pill" />
                </div>
            </form>
        </FormProvider>
    </div>
    );
}


