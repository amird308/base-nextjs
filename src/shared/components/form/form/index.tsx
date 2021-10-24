import React, { FC } from "react";
import {DeepPartial, SubmitHandler, useForm, FormProvider} from "react-hook-form";

interface IFormProps<T= any> {
    defaultValues: DeepPartial<T>,
    onSubmit: SubmitHandler<T>
}

const Form:FC<IFormProps>=(props)=>{
    const methods = useForm({defaultValues:props.defaultValues});
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit((data) => props.onSubmit(data))}>
                {props.children}
            </form>
        </FormProvider>
    )
}


export default Form;