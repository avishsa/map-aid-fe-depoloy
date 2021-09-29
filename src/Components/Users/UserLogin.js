import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../actions/userActions';
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import { userSchema } from '../../scheme/userScheme';

import '../../css/users/LoginForm.css';
//import { loginUser } from "../../api/users";



import InputLabel from "../boilerplate/form/InputLabel";

function UserLogin() {
    
    const history = useHistory();
    const [submitting, setSubmitting] = useState(false);
    const loggingIn = useSelector(state => state.authentication.loggedIn);
    const dispatch = useDispatch();
    const methods = useForm({
        mode: 'onBlur',
        resolver: yupResolver(userSchema)
    });
     // reset login status
     useEffect(() => { 
        dispatch(userActions.logout()); 
    }, []);
    const onSubmit = (data, e) => {
        
        if (submitting) return;
        setSubmitting(true);
        const  from  =   { pathname: "/" } ;
        dispatch(userActions.login(data, from));
        

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
