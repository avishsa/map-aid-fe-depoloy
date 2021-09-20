import * as yup from "yup";
export const userSchema = yup.object().shape({

    email: yup.string().email().required("שדה נדרש"),
    password: yup.string().required("שדה נדרש")
});
