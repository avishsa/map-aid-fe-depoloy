import React from "react";
import { useForm } from "react-hook-form";
import { getYYYYMMDD, getHHMM } from "../../Utilities/TimeFormatter";


export default function App() {
    //reportTime
    const defaultValues = {
        exampleRequired: "required",
        locationText: "בורלא 29, תל אביב",
        reportDate: getYYYYMMDD(new Date()),
        reportTime: getHHMM(new Date())
    };
    const { register, handleSubmit, watch, formState: { errors } } = useForm({ defaultValues });
    const onSubmit = data => console.log(data);

    console.log(watch("genderText"));

    return (<div className="container d-flex flex-column">
        <h2 className="text-end"> מילוי טופס דיווח</h2>
        <form className="form-inline" onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex flex-row-reverse bd-highlight">
                <input type="checkbox" {...register("isDistressed")} />
                <label className="form-check-label mx-2">זיהיתי מצוקה</label>
            </div>
            {watch("isDistressed") && (<input
                className="form-control d-flex float-end bd-highlight w-25 mt-1"
                {...register("distressedText")}

            />)}

            <div id="" className="container d-flex flex-column bd-highlight">
                <div className="form-row" id="locationField">
                    <div className="w-50 d-flex flex-column float-end">
                        <label className="form-label d-flex flex-row-reverse" htmlFor="locationText"> מיקום
                        </label>
                        <div className="d-flex flex-row-reverse">
                            <input {...register("locationText")} className="form-control text-end" disabled />
                            <label className="w-25 form-control btn btn-outline-secondary mx-2" onClick={() => { console.log("redirect to map") }}>שינוי</label>
                        </div>
                    </div>)
                </div>
                <div className="d-flex flex-row-reverse">
                    <div className="form-group mx-2 mt-2" >
                        <label htmlFor="reportDate"
                            className="d-flex form-label flex-row-reverse">
                            תאריך
                        </label>
                        <input
                            {...register("reportDate", { required: true })}
                            className="text-end float-end form-control"
                            type="date"
                            dir="rtl" />
                        {errors.reportDate && <span className="float-end">זהו שדה נדרש</span>}
                    </div>
                    <div className="form-group mx-2 mt-2" >
                        <label htmlFor="reportTime"
                            className="d-flex form-label flex-row-reverse">
                            שעה
                        </label>
                        <input
                            {...register("reportTime", { required: true })}
                            className="text-end float-end form-control"
                            type="time"
                            dir="rtl" />
                        {errors.reportTime && <span className="float-end" >זהו שדה נדרש</span>}
                    </div>
                </div>

            </div>
            <div id="homelessIdDiv" className="mt-3 container d-flex flex-column bd-highlight">
                <h4 className="mb-3 text-end">זיהוי</h4>
                <div className="d-flex flex-row-reverse form-group">
                    <input {...register("genderText")} type="radio" value="male" className="btn-check" id="male" autoComplete="off" />
                    <label className="btn btn-outline-danger" htmlFor="male">גבר</label>

                    <input {...register("genderText")} type="radio" value="female" className="btn-check" id="female" autoComplete="off" />
                    <label className="btn btn-outline-success" htmlFor="female">אישה</label>
                </div>
                <div className="my-3 form-row ">
                    <img className="float-end " src="./tshirt.png" alt="tshirtColor" style={{ height: "50px", width: "50px" }} />
                    <input type='color' {...register("tshirtColor")} className="mx-5 float-end" />
                </div>
                <div className="my-3 form-row ">
                    <img className="float-end " src="./trousers.png" alt="trousersColor" style={{ height: "50px", width: "50px" }} />
                    <input type='color' {...register("tshirtColor")} className="mx-5 float-end" />
                </div>
            </div>
            <div id="reporterIdDiv" className="mt-3 container d-flex flex-column bd-highlight">
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
                    <input type="checkbox" {...register("isNotify")} />
                    <label className="form-check-label mx-2">הודיעו לי כאשר הפניה שלי נענית</label>
                </div>


            </div>
            <div id="buttonDiv" className="mt-3 container d-flex justify-content-center bd-highlight">
                <button className=" btn btn-primary text-center "
                    type="submit">אשר ושלח
                </button>
            </div>
        </form>
    </div>


    );
}