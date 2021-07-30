import React from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { reportSchema, formFields } from './ReportCreate/reportScheme';
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  age: yup.number().positive().integer().required(),
});

export default function App() {
    const methods = useForm({
        resolver: yupResolver(schema)
      });
    const { register, handleSubmit, formState:{ errors } } = methods;
  const onSubmit = data => console.log(data);

  return (
    <FormProvider {...methods} >
    <form onSubmit={handleSubmit(onSubmit)}>
      
        <InputError fieldName="firstName"/>
      <input {...register("age")} />
      <p>{errors.age?.message}</p>
      
      <input type="submit" />
    </form>
    </FormProvider>
  );
}
function InputError(fieldName) {
    console.log(fieldName);
    
    const value = "firstName";
    const { register, formState: { errors } } = useFormContext(); // retrieve all hook methods
    return (<div><input {...register(value)} />
    {/* <p>{errors.firstName?.message}</p> */}
    </div>);
}
/*export default function App() {
    const methods = useForm({resolver: yupResolver(reportSchema) });
    const onSubmit = data => console.log(data);

    return (
        <FormProvider {...methods} > // pass all methods into the context
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <DistressedGroup />

                <input type="submit" />
            </form>
        </FormProvider>
    );
}
function DistressedGroup() {
    const { register, watch } = useFormContext(); // retrieve all hook methods
    console.log(watch("isDistressed"),formFields.isDistressed);
    return (<div className="d-flex flex-row-reverse bd-highlight">
        <input id="distressedCB" type="checkbox" {...register(formFields.isDistressed)} />
        <label htmlFor="distressedCB" className="form-check-label mx-2">זיהיתי מצוקה</label>
        {watch(formFields.isDistressed) && (<input
            className="form-control d-flex float-end bd-highlight w-25 mt-1"
            {...register(formFields.descriptionText)}
        />)}
    </div>);
}
*/