import React from 'react';
export const renderGenderGroupField = ({ input, type, label, id, meta: { touched, error } }) => {
    return (
        (<div className="d-flex flex-row-reverse form-group">
            <input type="radio" className="btn-check" name="options" id="male" autoComplete="off" />
            <label className="btn btn-outline-danger" htmlFor="male">גבר</label>

            <input type="radio" className="btn-check" name="options" id="female" autoComplete="off" />
            <label className="btn btn-outline-success" htmlFor="female">אישה</label>

        </div>
        )
    );
};
export const renderColor = ({ input, imgSrc, type, icon, label, id, meta: { touched, error } }) => {

    return (<div className="my-3 form-row ">
        <img className="float-end " src={imgSrc} alt={label} style={{ height: "50px", width: "50px" }} />
        <input id={id} type={type} {...input} className="mx-5 float-end" />
    </div>);
}

const onCBCLick = id => {
    const elmnt = document.querySelector(`#${id}`);
    elmnt.type === "hidden" ? elmnt.type = "text" : elmnt.type = "hidden";
}
export const renderDistressGroupField = ({ input, type, label, id, meta: { touched, error } }) => {
    return (
        (
            <div className="container">
                <div className="d-flex flex-row-reverse bd-highlight">
                    <input
                        id="DistressedCB"
                        className="form-check-input"                        
                        type="checkbox"
                        onClick={() => onCBCLick(id)}
                    />
                    <label
                        className="form-check-label mx-2"
                        htmlFor="DistressedCB">
                        {label}
                    </label>
                </div>
                <div className="d-flex float-end bd-highlight w-25 mt-1">
                    <input
                        className="form-control"
                        {...input}
                        id={id}
                        type="hidden"
                    />
                </div>
            </div>)
    );
}

export const renderMap = ({ input, type, label, id, meta: { touched, error } }) => {
   
    return (
        (<div className="w-50 d-flex flex-column float-end">
            <label className="form-label d-flex flex-row-reverse" htmlFor={id}>מיקום</label>
            <div className="d-flex flex-row-reverse">
                <input id={id}  {...input} value={label} className="form-control text-end" disabled />
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
                className={`d-flex form-label flex-row-reverse`} >
                {label}
            </label>
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
                className={`mx-2 d-flex form-label flex-row-reverse form-check-label`} >
                {label}
            </label>
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




