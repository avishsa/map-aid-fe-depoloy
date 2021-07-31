import React from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { reportFormSchema, formFields } from './ReportCreate/reportScheme';
import { getDateTime } from "../../Utilities/TimeFormatter";
import { post } from "../../mock_apis/reports";


function DistressedGroup() {
    const { register, watch } = useFormContext(); // retrieve all hook methods
    return (<div className="mx-3">
        <div className="d-flex flex-row-reverse bd-highlight">
            <input id="distressedCB" type="checkbox" {...register(formFields.isDistressed)} />
            <label htmlFor="distressedCB" className="form-check-label mx-2">זיהיתי מצוקה</label>
        </div>
        {watch(formFields.isDistressed) && (<input
            className="form-control d-flex  flex-column float-end bd-highlight w-25 mt-1"
            {...register(formFields.descriptionText)}
        />)}
    </div>);
}
function MapGroup({ location }) {
    console.log("vewvevwevgwevgew", location);
    return (<div className="form-row" id="locationField">
        <div className="w-50 d-flex flex-column float-end">
            <label className="form-label d-flex flex-row-reverse" htmlFor={formFields.locationText}> מיקום
            </label>
            <div className="d-flex flex-row-reverse">
                <input value={location} className="form-control text-end" disabled />
                <label className="w-25 form-control btn btn-outline-secondary mx-2" onClick={() => { console.log("redirect to map") }}>שינוי</label>
            </div>
        </div>
    </div>);
}
function RequiredFields({ location }) {

    const { register, formState: { errors } } = useFormContext(); // retrieve all hook methods
    console.log("261654156165156", location);
    return (<div id="" className="container d-flex flex-column bd-highlight">
        <MapGroup location={location} />
        <div className="d-flex flex-row-reverse">
            <div className="form-group mx-2 mt-2" >
                <label htmlFor={formFields.reportDate}
                    className="d-flex form-label flex-row-reverse">
                    תאריך ושעה
                </label>
                <input type="datetime-local" className="form-control" {...register(formFields.reportDate)} />
                {errors.reportDate && "זהו שדה נדרש"}

            </div>
        </div>
    </div>
    );
}
function HomelessDetails() {
    return (<div id="homelessIdDiv" className="mt-3 container d-flex flex-column bd-highlight">
        <h4 className="mb-3 text-end">זיהוי</h4>
        <RadioInput
            name={formFields.genderText}
            listOptions={[
                {
                    value: "male",
                    label: "גבר",
                    color: "btn-outline-danger"
                },
                {
                    value: "female",
                    label: "אישה",
                    color: "btn-outline-success"
                }
            ]} />
        <InputColorImage imgSrc="./tshirt.png" name={formFields.tshirtColor} />
        <InputColorImage imgSrc="./trousers.png" name={formFields.trousersColor} />
        <InputLabel type="text" label="תיאור כללי" id="descriptionText" className="" />
    </div>);
}
function RadioInput({ name, listOptions }) {
    const { register } = useFormContext();
    return (
        <div className="d-flex flex-row-reverse form-group">
            {
                listOptions.map(({ value, label, color }, index) => (<div key={index}>
                    <input {...register(name)} type="radio" value={value} className="btn-check" id={value} autoComplete="off" />
                    <label className={`btn ${color}`} htmlFor={value}>{label}</label>
                </div>))
            }
        </div>
    );
}
function InputColorImage({ imgSrc, name }) {
    const { register } = useFormContext(); // retrieve all hook methods
    return (<div className="my-3 form-row ">
        {imgSrc && <img className="float-end m-2 " src={imgSrc} alt="tshirtColor" style={{ height: "50px", width: "50px" }} />}
        <input type='color' {...register(name)} list="colors" className=" d-flex flex-row mt-1 mx-5 form-control float-end" style={{ height: "50px", width: "70px" }} />
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
    );
}
function ReporterDetails() {
    return (<div id="reporterIdDiv" className="mt-3 container d-flex flex-column bd-highlight">
        <h4 className="mb-3 text-end">פרטי המדווח/ת</h4>
        <InputLabel type="text" label="שם" id={formFields.reporterNameText} />
        <InputLabel type="text" label="טלפון" id={formFields.reporterPhoneText} />
        <Checkbox type="checkbox" label="הודיעו לי כאשר הפניה שלי נענית" id={formFields.isNotify} />
    </div>);
}


function Checkbox({ label, id }) {
    const { register } = useFormContext(); // retrieve all hook methods
    return (<div className="mt-3 d-flex flex-row-reverse bd-highlight">
        <input type="checkbox" {...register(id)} />
        <label className="form-check-label mx-2">{label}</label>
    </div>);
}
function InputLabel({ type, label, id }) {
    const { register, formState: { errors, isSubmitted } } = useFormContext(); // retrieve all hook methods
    console.log("InputLabel vewvew", id, errors);
    return (<div className="form-group mx-2 mt-2" >
        <label
            htmlFor={id}
            className="d-flex form-label flex-row-reverse">
            {label}
        </label>
        <input
            {...register(id)}
            className="float-end w-25 form-control"
            type={type}
            dir="rtl" />
        <div className="d-flex text-end flex-row-reverse float-end invalid-feedback">{errors[id] && errors[id].message}</div>
        <div className="d-flex text-end flex-row-reverse float-end valid-feedback">{!errors[id] && isSubmitted && 'נראה טוב'}</div>

    </div>
    );
}
export default function App() {
    const today = new Date();
    const location = { location_text: "בורלא 29, תל אביב", location_json: { lon: 32.1616, lat: 32.1514 } };
    const defaultValues = { notify_me: false, person_gender: "male", report_date: getDateTime(today) }
    const methods = useForm({ defaultValues, resolver: yupResolver(reportFormSchema) });
    const onSubmit = data => {

        console.log({ ...data, ...location });
        post({ ...data, ...location });
    }
    const { watch, formState: { errors } } = methods;


    console.dir(watch());
    console.log(errors, defaultValues);

    return (<div className="container d-flex flex-column">
        <h2 className="text-end"> מילוי טופס דיווח</h2>
        <FormProvider {...methods}>
            <form className="form-inline needs-validation" onSubmit={methods.handleSubmit(onSubmit)}>
                <DistressedGroup />
                <RequiredFields location={location.location_text} />
                <HomelessDetails />
                <ReporterDetails />
                <div id="buttonDiv" className="mt-3 container d-flex justify-content-center bd-highlight">
                    <input value="אשר ושלח" type="submit" className=" btn btn-primary text-center" />
                </div>

            </form>
        </FormProvider>
    </div>


    );
}