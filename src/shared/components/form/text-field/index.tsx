import React  from "react";
import IBaseInputProps from "@/components/form/base-input-props";
import TextField, {ITextFieldProps} from "@/components/text-field";
import {useFormContext} from "react-hook-form";

type ITextFieldFormProps =  IBaseInputProps & ITextFieldProps;

const TextFieldForm: React.FC<ITextFieldFormProps> = ({name, ...rest}) => {
    const methods = useFormContext();
    const { getValues, setValue } = methods;
    return(
        <TextField
            onChange={(e)=>{
                        setValue(name, e.target.value);
                    }}
            value={getValues(name)} {...rest} />
    );
};

export default TextFieldForm;
