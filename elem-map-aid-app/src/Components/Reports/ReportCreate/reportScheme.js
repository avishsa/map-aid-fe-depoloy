
import * as yup from "yup";
const today = new Date();

const digitsOnly = (value) => /^\d*$/.test(value)
export const formFields = {
    isDistressed: {
        name: "distressed",
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
                value: "male",
                label: "איש",
                className: 'btn-outline-danger'
            },
            {
                value:"female",
                label: "אישה",
                className: 'btn-outline-success'
            }]
    },
    tshirtColor: {
        name:"person_shirt_color",
        imgSrc: './tshirt.png'
    },
    trousersColor: {
        name:"person_pants_color",
        imgSrc: './trousers.png'
    },
    descriptionText: {
        name:"person_general_description",
        label:"תיאור כללי"  
    },
    reporterNameText: {
        name:"reporter_full_name",
        label:"שם"
    },
    reporterPhoneText: {
        name:"reporter_phone_number",
        label: "מספר טלפון"
    },
    isNotify: {
        name:"notify_me",
        label:"הודיעו לי כשהפנייה שלי נענית"
    },
    reportDate: {
        name:"report_date",
        label: "תאריך ושעה"
    },
}

export const reportFormSchema = yup.object().shape({

    distressed: yup.boolean().required(),
    distressed_info: yup.string(),
    person_gender: yup.string().required(),
    person_shirt_color: yup.string(),
    person_pants_color: yup.string(),
    person_general_description: yup.string(),
    reporter_full_name: yup.string(),
    reporter_phone_number: yup.string().test('Digits only', 'השדה צריך להכיל ספרות בלבד', digitsOnly)
        .test('length', 'מספר טלפון צריך להיות באורך של 10 ספרות', (value) => value.length === 0 || value.length === 10)
    ,

    notify_me: yup.boolean().required(),
    report_date: yup.date().required().max(today),

});
