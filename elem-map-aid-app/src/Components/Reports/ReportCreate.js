import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';


import { getYYYYMMDD, getHHMM } from '../../Utilities/TimeFormatter';
import { required, phone, latestDate } from '../../Utilities/formValidation';
import { createReport } from '../../actions';
import { renderCheckBox,renderDistressGroupField, renderInputLabel, renderGenderGroupField, renderColor, renderMap } from './ReportCreate/formFields';
class ReportCreate extends Component {
    componentWillMount() {
        var date = new Date();
        var dateFormat = getYYYYMMDD(date);
        var timeFormat = getHHMM(date);
        this.props.initialize({ timeTB: timeFormat, dateTB: dateFormat });
    }

    onSubmit = formValues => {

        console.log("submitted", formValues);
        this.props.createReport(formValues);
    }




    render() {
        return (
            <div className="container d-flex flex-column">
                <h2 className="text-end"> מילוי טופס דיווח</h2>
                <form className="form-inline" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field
                        name="isDistressed"
                        type="checkbox"
                        component={renderDistressGroupField}
                        id="destress"
                        label="זיהיתי מצוקה"
                        placeholder="תיאור המצוקה"
                    />
                    
                    <div id="" className="container d-flex flex-column bd-highlight">
                        <div className="form-row">
                            <Field

                                name="mapTB"
                                type="map"
                                component={renderMap}
                                label="מיקום"
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
                            label="tshirt"
                        />
                        <Field
                            name="trousersColor"
                            component={renderColor}
                            id="shirtColor"
                            imgSrc="./trousers.png"
                            label="trousers"
                        />
                        <Field
                            name="descriptionTB"
                            type="text"
                            widthInput="w-50"
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
                    <div id="button" className="mt-3 container d-flex justify-content-center bd-highlight">
                    <button type="button" className="w-25 btn btn-primary text-center " type="submit">אשר ושלח</button>
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