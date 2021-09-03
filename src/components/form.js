import React from 'react';
import {FormProvider, useForm} from "react-hook-form";
import Input from "./input";

const Form = () => {
    const methods = useForm();
    const {register, handleSubmit} = methods;
    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit((data) => console.log(data))}>
                <label>Nested Input</label>
                <Input/>
                <input type="submit"/>
            </form>
        </FormProvider>
    );
}

export default Form;
