import { FormProvider, useForm, useFormContext } from "react-hook-form";
import React from "react";
import Input from "./input";

export default {
    title: "Forms/Input",
    component: Input,
};

const Template = (args) => {
    const methods = useForm();

    const {
        handleSubmit,
    } = methods;

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <Input {...args} />
            </form>
        </FormProvider>
    );
};
export const Default = Template.bind({});
Default.args = {
    name: "default"
};


