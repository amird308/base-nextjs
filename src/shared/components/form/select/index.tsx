import React from "react";
import IBaseInputProps from "@/components/form/base-input-props";
import {MenuItem, Select as MuiSelect} from "@material-ui/core";
import {useFormContext} from "react-hook-form";

interface ISelectProps extends IBaseInputProps{
    options: any[]
}

const SelectForm: React.FC<ISelectProps> = ({ options, name, ...rest}) => {
    const methods = useFormContext();
    const { getValues, setValue } = methods;
    const handleChange = (e: any) => {
        console.log(e.target.value);
        setValue(name, e.target.value);
    };

    return (
        <MuiSelect value={getValues(name)}  onChange={handleChange} {...rest}>
            {options.map((value) => (
                <MenuItem key={`select-value${value}`} value={value}>
                    {value}
                </MenuItem>
            ))}
        </MuiSelect>
    );
};

export default SelectForm;
