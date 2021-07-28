import React, { Component } from 'react';
import { Input } from 'framework7-react';
import ColorSlider from './ColorSlider';
export const renderGenderGroupField = ({ input, type, label, id, meta: { touched, error } }) => {
    return (
        (<div class="d-flex flex-row-reverse form-group">
            <input type="radio" class="btn-check" name="options" id="male" autocomplete="off" />
            <label class="btn btn-outline-danger" for="male">זכר</label>

            <input type="radio" class="btn-check" name="options" id="female" autocomplete="off" />
            <label class="btn btn-outline-success" for="female">נקבה</label>

        </div>
        )
    );
};
export const renderColor = ({ input, imgSrc, type, icon, label, id, meta: { touched, error } }) => {
    return (<div className="my-3 form-row ">
        <img className="float-end " src={imgSrc} alt={label} style={{ height: "50px", width: "50px" }} />
        <ColorSlider width="w-50 float-end mx-2"/>
    </div>);

}
const onCBCLick = id => {
    const elmnt = document.querySelector(`#${id}TB`);
    elmnt.type === "hidden" ? elmnt.type = "text" : elmnt.type = "hidden";
}
export const renderDistressGroupField = ({ input, type, label, id, meta: { touched, error } }) => {
    return (
        (
            <div className="container">
                <div className="d-flex flex-row-reverse bd-highlight">
                    <input
                        id={id + "CB"}
                        className="form-check-input"
                        {...input}
                        type={type}
                        onClick={() => onCBCLick(id)}
                    />
                    <label
                        className="form-check-label mx-2"
                        htmlFor={id + "CB"}>
                        {label}
                    </label>
                </div>
                <div className="d-flex float-end bd-highlight w-25 mt-1">
                    <input
                        className="form-control"
                        id={id + "TB"}
                        type="hidden"
                    />
                </div>
            </div>)
    );
}

export const renderMap = ({ input, type, label, id, meta: { touched, error } }) => {
    return (
        (<div className="w-50 d-flex flex-column float-end">
            <label className="form-label d-flex flex-row-reverse" htmlFor={id}>{label}</label>
            <div className="d-flex flex-row-reverse">
                <input id={id} className="form-control text-end" disabled value="מאזה 49" />
                <label className="w-25 form-control btn btn-outline-secondary mx-2" onClick={() => { console.log("redirect to map") }}>שינוי</label>
            </div>

        </div>)
    );
}
export const renderInputLabel = ({ input, type, widthInput, label, id, meta: { touched, error } }) => {
    let width = widthInput ? widthInput : "";
    return (
        (<div className={`form-group mx-2 mt-2 ${type === 'checkbox' && 'd-flex flex-row-reverse'}`} >
            <label htmlFor={id}
                className={`d-flex form-label flex-row-reverse`} htmlFor={id}>{label}</label>
            <input
                className={`${width} text-end float-end form-control"}`}
                id={id} {...input} type={type} dir="rtl" />
            <div className="">{renderError(touched, error)}</div>
        </div>)
    );
}
export const renderCheckBox = ({ input, type, label, id, meta: { touched, error } }) => {
    return (
        (<div className={`form-group mt-3 mx-1 d-flex flex-row-reverse`} >
            <input
                className={` text-end float-end form-check-input`}
                id={id} {...input} type={type} dir="rtl" />

            <label htmlFor={id}
                className={`mx-2 d-flex form-label flex-row-reverse form-check-label`} htmlFor={id}>{label}</label>
        </div>)
    );
}
let renderError = (touched, error) => {

    if (touched && error) {
        return (
            <div>
                <div className="invalid-feedback">
                    {error}
                </div>
            </div>
        );
    }
}




export class Distress extends Component {
    render() {
        return (<div>Gender Group Field</div>)
    }
}

export class InputLabel extends Component {
    render() {
        return (<div>Input label</div>)
    }
}
export class Gender extends Component {
    render() {
        return (<div>Gender Group Field</div>)
    }
}