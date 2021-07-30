
import * as yup from "yup";
import { parse, isDate } from "date-fns";
const today = new Date();
function parseDateString(value, originalValue) {
    console.log("parseDateString",originalValue);
  const parsedDate = isDate(originalValue)
    ? originalValue
    : parse(originalValue, "yyyy-MM-dd", new Date());
    console.log("parseDateString",parsedDate);
  return parsedDate;
}
export const formFields ={
    isDistressed: "distressed",
    distressedText: "distressed_info",
    genderText: "person_gender",
    tshirtColor: "person_shirt_color",
    trousersColor : "person_pants_color",
    descriptionText: "person_general_description",
    reporterNameText: "reporter_full_name",
    reporterNameText: "reporter_phone_number",
    isNotify: "notify_me" ,
    reportDate: "report_date",
}

export const reportFormSchema = yup.object().shape({
             
    distressed: yup.boolean().required(),
    distressed_info: yup.string(),
    person_gender: yup.string().required(),
    person_shirt_color: yup.string(),
    person_pants_color: yup.string(),
    person_general_description: yup.string(),
    reporter_full_name: yup.string(),
    reporter_phone_number: yup.string(),
    notify_me: yup.boolean().required(),
    report_date: yup.date().required().max(today),
    
});
