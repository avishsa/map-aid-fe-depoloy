import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';


import { getYYYYMMDD, getHHMM } from '../../Utilities/TimeFormatter';
import { required, phone, latestDate } from '../../Utilities/formValidation';
import { createReport } from '../../actions';
import { renderCheckBox, renderDistressGroupField, renderInputLabel, renderGenderGroupField, renderColor, renderMap } from './ReportCreate/formFields';
const colors = { black: '#000000', white: "#ffffff" };

class ReportCreate extends Component {
    componentDidMount () {
        var date = new Date();
        var dateFormat = getYYYYMMDD(date);
        var timeFormat = getHHMM(date);
        const location = {lat:32.3523,lon:32.3432};
        this.props.initialize({
            timeTB: timeFormat,
            dateTB: dateFormat,
            location: location,
            shirtColor: colors.black,
            trousersColor: colors.white
        });

    }

    onSubmit = formValues => {

        console.log("submitted", formValues);
        this.props.createReport(formValues);
        
    }




    render() {
        const stringAddress ="מאזה 49, תל אביב";
        return (
            <div className="container d-flex flex-column">
                <h2 className="text-end"> מילוי טופס דיווח</h2>
                <form id="createReportForm" className="form-inline" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field
                        name="distressedDescription"
                        type="text"
                        component={renderDistressGroupField}
                        id="destress"
                        label="זיהיתי מצוקה"
                        placeholder="תיאור המצוקה"
                    />

                    <div id="" className="container d-flex flex-column bd-highlight">
                        <div className="form-row">
                            <Field
                                id="mapTB"
                                name="mapTB"
                                type="map"
                                component={renderMap}
                                label= {stringAddress}
                            />
                        </div>
                        <div className="d-flex flex-row-reverse">
                            <Field
                                name="dateTB"
                                type="date"
                                component={renderInputLabel}
                                label="תאריך"
                            />
                            <Field
                                name="timeTB"
                                type="time"
                                component={renderInputLabel}
                                label="שעה"
                            />
                        </div>
                    </div>

                    <div id="homelessIdDiv" className="mt-3 container d-flex flex-column bd-highlight">
                        <h4 className="mb-3 text-end">זיהוי</h4>
                        
                        <Field
                            className="row"
                            name="gender"
                            type="checkbox"
                            component={renderGenderGroupField}
                            id="gender"
                        />
                        <Field
                            name="shirtColor"
                            component={renderColor}
                            id="shirtColor"
                            imgSrc="./tshirt.png"
                            type="color"
                            label="tshirt"
                        />
                        <Field
                            name="trousersColor"
                            component={renderColor}
                            id="shirtColor"
                            imgSrc="./trousers.png"
                            type="color"
                            label="trousers"
                        />
                        <Field
                            name="descriptionTB"
                            id="descriptionTB"
                            type="text"
                            className="w-50"
                            component={renderInputLabel}
                            label="תיאור כללי"
                        />
                    </div>
                    <div id="reporterIdDiv" className="mt-3 container d-flex flex-column bd-highlight">
                        <h4 className="mb-3 text-end">פרטי המדווח/ת</h4>
                        <Field
                            name="nameTB"
                            type="text"
                            component={renderInputLabel}
                            label="שם"
                        />
                        <Field
                            name="phoneTB"
                            type="text"
                            component={renderInputLabel}
                            pattern="\d*"
                            label="טלפון"
                            title="מספר טלפון מכיל רק ספרות" />

                        <Field
                            id="NotifyCB"
                            name="NotifyCB"
                            type="checkbox"
                            component={renderCheckBox}
                            label="הודיעו לי כאשר הפניה שלי נענית"
                        />
                    </div>
                    <div id="buttonDiv" className="mt-3 container d-flex justify-content-center bd-highlight">
                        <button  className="w-25 btn btn-primary text-center " 
                        type="submit">אשר ושלח
                        </button>
                    </div>
                </form>
            </div >
        );
    }
}

const validate = formValues => {

    const errors = {};
    errors.phoneTB = phone(formValues.phoneTB);
    errors.dateTB = latestDate(formValues.dateTB) + required(formValues.dateTB);

    errors.timeTB = required(formValues.timeTB)
    //to validate that map has value
    return errors;
};
const formWrapped = reduxForm({
    form: 'reportCreate',
    validate
})(ReportCreate);

export default connect(
    null,
    {
        createReport
    }
)(formWrapped);