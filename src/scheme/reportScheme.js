
import * as yup from "yup";
import {isLaterThanNow } from '../Utilities/TimeFormatter';


const digitsOnly = (value) => /^\d*$/.test(value)
export const getcolorsOptions = colorIndex => {
    return colorsOptions[colorIndex - 1].value;
}
export const colorsValues = [
    "#FFFF00", "#00FF00",
    "#00eeff",
    "#2a00ff",
    "#ff00cc",
    "#ff0000",
    "#000000"
]

export const colorsOptions = [
    {
        value: "#FFFF00",
        label: "",
        className: 'LblColor LblColor1'
    },
    {
        value: "#00FF00",
        label: "",
        className: 'LblColor LblColor2'
    },
    {
        value: "#00eeff",
        label: "",
        className: 'LblColor LblColor3'
    },
    {
        value: "#2a00ff",
        label: "",
        className: 'LblColor LblColor4'
    },
    {
        value: "#ff00cc",
        label: "",
        className: 'LblColor LblColor5'
    },
    {
        value: "#ff0000",
        label: "",
        className: 'LblColor LblColor6'
    },
    {
        value: "#000000",
        label: "",
        className: 'LblColor LblColor7'
    },

];
export const formFields = {
    isDistressed: {
        name: "isDistressed",
        label: "זיהוי מצוקה"
    },
    distressedText: {
        name: "distressed_info",
        label: "פירוט המצוקה"
    },
    genderText: {
        name: "person_gender",
        label: "מין",
        options: [
            {
                value: "זכר",
                label: "גבר",
                className: 'btn-outline-secondary'
            },
            {
                value: "נקבה",
                label: "אישה",
                className: 'btn-outline-primary'
            }]
    },
    tshirtColor: {
        name: "person_shirt_color",
        imgSrc: "woman-shirt.svg",//'fas fa-tshirt fa-lg'

    },
    trousersColor: {
        name: "person_pants_color",
        imgSrc: './jeans-pants.svg',

    },
    descriptionText: {
        name: "person_general_description",
        label: "תיאור כללי"
    },
    reporterNameText: {
        name: "reporter_full_name",
        label: "שם"
    },
    reporterPhoneText: {
        name: "reporter_phone_number",
        label: "מספר טלפון"
    },
    isNotify: {
        name: "isNotify",
        label: "הודיעו לי כשהפנייה שלי נענית"
    },
    reportDate: {
        name: "report_date",
        label: "תאריך"
    },
    reportTime: {
        name: "report_time",
        label: "שעה"
    },
    reportDateTime: {
        name: "report_datetime",
        label: "תאריך ושעה"
    },
}

export const reportFormSchema = yup.object().shape({

    isDistressed: yup.boolean().required("שדה נדרש"),
    distressed_info: yup.string(),
    person_gender: yup.string('שדה מסוג טקסט')
        .typeError('בחר מגדר')
        .required('בחר מגדר'),
    person_shirt_color: yup.string(),
    person_pants_color: yup.string(),
    person_general_description: yup.string(),
    reporter_full_name: yup.string(),
    reporter_phone_number: yup.string().test('Digits only', 'השדה צריך להכיל ספרות בלבד', digitsOnly)
        .test('length', 'מספר טלפון צריך להיות באורך של 10 ספרות', (value) => value.length === 0 || value.length === 10)
    ,

    isNotify : yup.boolean(),
    report_date: yup.date()
        .required("שדה נדרש")
        .typeError('תאריך לא תקין, חסר אחד מהערכים או יותר (יום, חודש, שנה)')
    .test("","תאריך נוכחי",function (value){
        return !isLaterThanNow(this.parent.report_date,this.parent.report_time);
    })
    ,
    report_time: yup.date()
        .required("שדה נדרש")
        .typeError('שעה לא תקינה, חסר אחד מהערכים או יותר (יום, חודש, שנה)')
    .test("","השעה לא יכולה להיות מאוחרת יותר מהשעה הנוכחית, עבור היום",function (value){

        return !isLaterThanNow(this.parent.report_date,this.parent.report_time);
    })
    

    
    // .test("max date",,value => value.getTime()<new Date().getTime())
    

})
    .test({
        name: "maxDate",
        message: "בדוק את התאריך והשעה שהזנת",
        test: values => !isLaterThanNow(values.report_date, values.report_time),
        
    })

    ;
