
import * as yup from "yup";

export const formFields ={
    distressed: "isDistressed",
    distressed_info: "distressedText" ,
    person_location_text: "locationText",
    person_location_json: "locationJson",
    person_gender: "genderText",
    person_shirt_color: "tshirtColor",
    person_pants_color: "trousersColor",
    person_general_description: "descriptionText",
    reporter_full_name: "reporterNameText",
    reporter_phone_number: "reporterNameText" ,
    notify_me: "isNotify",
    report_date:""
    
}
export const reportSchema = yup.object().shape({
             
    distressed: yup.boolean().required(),
    distressed_info: yup.string(),
    person_location: yup.string().required(),
    person_gender: yup.string(),
    person_shirt_color: yup.string(),
    person_pants_color: yup.string(),
    person_general_description: yup.string(),
    reporter_full_name: yup.string(),
    reporter_phone_number: yup.string(),
    notify_me: yup.boolean().required(),
    report_date: yup.string(),//yup.date().transform(parseDateString).required().max(today),
    report_time: yup.string() //yup.date().transform(parseDateString).required().max(today)
});
