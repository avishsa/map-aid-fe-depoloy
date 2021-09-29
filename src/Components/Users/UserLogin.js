import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import { userSchema } from '../../scheme/userScheme';

import '../../css/users/LoginForm.css';
import useToken from "../../routers/Authentication/useToken";
//import { loginUser } from "../../api/users";
import {fakeLogin as loginUser} from "../../api/fakeUsers";


import InputLabel from "../boilerplate/form/InputLabel";

function UserLogin({setToken}) {
    
    const history = useHistory();
    const [submitting, setSubmitting] = useState(false);
    const methods = useForm({
        mode: 'onBlur',
        resolver: yupResolver(userSchema)
    });

    const onSubmit = (data, e) => {
        if (submitting) return;
        setSubmitting(true);
        
        const cr = loginUser(data);        
        cr
            .then(res => { setSubmitting(false);                
                sessionStorage.setItem('token', JSON.stringify(res.token));
                sessionStorage.setItem('user', JSON.stringify(res.user));
                setToken(JSON.stringify(res.token));
                history.push("/report/index"); })
            .catch(res => { setSubmitting(false); history.push("/user/failure"); })


    };
    const onError = (errors, e) => {

    }
    const getErrorMsg = errorList => errorList[""]?.message;  
    return (<div id="formContainer" className="d-flex flex-column justify-content-center">
        <h1 className="text-end">כניסת משתמש</h1>

        <FormProvider {...methods}>
            <form
                id="loginUser"
                className="form-inline needs-validation"
                noValidate
                onSubmit={
                    methods.handleSubmit(onSubmit, onError)
                }
            >
               <InputLabel id="email" type="email" label="שם משתמש"/>
               <InputLabel id="password" label="סיסמא" type="password"/>
                
                <div id="buttonDiv" className="d-flex justify-content-center bd-highlight">
                    <input disabled={submitting}
                        id="loginBtn"
                        value="המשך"
                        type="submit"
                        className=" loginBtn btn text-center rounded-pill" />
                </div>

            </form>
        </FormProvider>
    </div>
    );
}



export default UserLogin;
