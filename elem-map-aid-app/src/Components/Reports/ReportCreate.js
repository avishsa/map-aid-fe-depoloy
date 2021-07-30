import React from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { reportFormSchema, formFields } from './ReportCreate/reportScheme';
import { getDateTime } from "../../Utilities/TimeFormatter";
import ColorSlider from "./ReportCreate/ColorSlider";

function DistressedGroup() {
    const { register, watch } = useFormContext(); // retrieve all hook methods
    return (<div className="d-flex flex-row-reverse bd-highlight">
        <input id="distressedCB" type="checkbox" {...register(formFields.isDistressed)} />
        <label htmlFor="distressedCB" className="form-check-label mx-2">זיהיתי מצוקה</label>
        {watch(formFields.isDistressed) && (<input
            className="form-control d-flex float-end bd-highlight w-25 mt-1"
            {...register(formFields.descriptionText)}
        />)}
    </div>);
}
function MapGroup(location) {
    const loc = location.location;    
    return (<div className="form-row" id="locationField">
        <div className="w-50 d-flex flex-column float-end">
            <label className="form-label d-flex flex-row-reverse" htmlFor={formFields.locationText}> מיקום
            </label>
            <div className="d-flex flex-row-reverse">
                <input value={loc} className="form-control text-end" disabled />
                
                <label className="w-25 form-control btn btn-outline-secondary mx-2" onClick={() => { console.log("redirect to map") }}>שינוי</label>
            </div>
        </div>)
    </div>);
}
function RequiredFields(location) {
    const loc = location.location;
    console.log("RequiredFields",loc);
    const { register, formState: { errors } } = useFormContext(); // retrieve all hook methods
    return (<div id="" className="container d-flex flex-column bd-highlight">
        <MapGroup location={loc}/>
        <div className="d-flex flex-row-reverse">
            <div className="form-group mx-2 mt-2" >
                <label htmlFor="reportDate"
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
    const { register, watch } = useFormContext(); // retrieve all hook methods
    return (<div id="homelessIdDiv" className="mt-3 container d-flex flex-column bd-highlight">
        <h4 className="mb-3 text-end">זיהוי</h4>
        <div className="d-flex flex-row-reverse form-group">
            <input {...register(formFields.genderText)} type="radio" value="male" className="btn-check" id="male" autoComplete="off" />
            <label className="btn btn-outline-danger" htmlFor="male">גבר</label>
            <input {...register(formFields.genderText)} type="radio" value="female" className="btn-check" id="female" autoComplete="off" />
            <label className="btn btn-outline-success" htmlFor="female">אישה</label>
        </div>
        <div className="my-3 form-row ">
            <img className="float-end " src="./tshirt.png" alt="tshirtColor" style={{ height: "50px", width: "50px" }} />
            <input type='color' {...register("tshirtColor")} className="mx-5 float-end" />
        </div>
        <div className="my-3 form-row ">
            <img className="float-end " src="./trousers.png" alt="trousersColor" style={{ height: "50px", width: "50px" }} />
            <input type='color' {...register("trousersColor")} className="mx-5 float-end" />
        </div>
        <InputLabel type="text" label="תיאור כללי" id="descriptionText" className="" />
    </div>);
}

function ReporterDetails() {
    const { register, watch } = useFormContext(); // retrieve all hook methods
    return (<div id="reporterIdDiv" className="mt-3 container d-flex flex-column bd-highlight">
        <h4 className="mb-3 text-end">פרטי המדווח/ת</h4>
        <div className="form-group mx-2 mt-2" >
            <label htmlFor="nameTB"
                className="d-flex form-label flex-row-reverse">
                שם
            </label>
            <input
                className="w-25 float-end form-control"
                id="nameTB" {...register("reporterNameText")} dir="rtl" />
        </div>
        <div className="form-group mx-2 mt-2" >
            <label htmlFor="phoneTB"
                className="d-flex form-label flex-row-reverse">
                טלפון
            </label>
            <input
                className=" w-25 float-end form-control"
                id="phoneTB" {...register("reporterNameText")} dir="rtl" />
        </div>
        <div className="d-flex flex-row-reverse bd-highlight">
            <input type="checkbox" {...register(formFields.isNotify)} />
            <label className="form-check-label mx-2">הודיעו לי כאשר הפניה שלי נענית</label>
        </div>


    </div>);
}



function InputLabel({ type, label, id }) {
    const { register } = useFormContext(); // retrieve all hook methods
    return (<div className="form-group mx-2 mt-2" >
        <label
            htmlFor={id}
            className="d-flex form-label flex-row-reverse">
            {label}
        </label>
        <input
            {...register(id)}
            className="text-end float-end form-control"
            type={type}
            dir="rtl" />

    </div>
    );
}
export default function App() {
    const today = new Date();
    const location = {location_text:"בורלא 29, תל אביב", location_json:{lon:32.1616, lat:32.1514}};
    const defaultValues = {notify_me:false,person_gender:"male", report_date:getDateTime(today)}
    const methods = useForm({defaultValues,resolver: yupResolver(reportFormSchema) });
    const onSubmit = data => {
        
        console.log({...data,...location});
    }
    const { watch, formState: {errors} } = methods;


    console.dir(watch());
    console.dir(errors);

    return (<div className="container d-flex flex-column">
        <h2 className="text-end"> מילוי טופס דיווח</h2>
        <FormProvider {...methods}>
            <form className="form-inline" onSubmit={methods.handleSubmit(onSubmit)}>
                <DistressedGroup />
                <RequiredFields location={location.text}/>
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