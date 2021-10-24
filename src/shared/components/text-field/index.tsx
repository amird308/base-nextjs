import React, {useState, useCallback, useRef, useEffect} from "react";
import {makeStyles, TextField as MuiTextField, TextFieldProps, InputAdornment} from "@material-ui/core";
import clsx from "clsx";


type StyleProps = {
    labelOffset: number | undefined;
};

const useStyles = makeStyles(() => ({
    inputLabelRoot: {
        display: ({labelOffset}: StyleProps) =>
            labelOffset !== undefined ? "block" : "none",
        transition: ".3s cubic-bezier(.25,.8,.5,1)",
        marginLeft: ({labelOffset}: StyleProps) => (labelOffset || 0) + 10,
    },
    inputLabelShrink: {
        marginLeft: () => 30,
    },
}));

export type ITextFieldProps = TextFieldProps & {
    startAdornment?: any
}

const TextField: React.FC<ITextFieldProps> = ({startAdornment, ...props}) => {
    const startAdornmentRef = useRef<HTMLDivElement>(null);
    const [labelOffset, setLabelOffset] = useState<number>();
    const [shrink, setShrink] = useState<boolean>(false);
    useEffect(() => {
        setLabelOffset(startAdornmentRef.current?.offsetWidth);
    }, [startAdornment]);

    const classes = useStyles({
        labelOffset,
    });

    useEffect(()=>{
        setShrink(!!props.value);
    },[props.value]);

    const onFocus = useCallback((event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setShrink(true);
            if (props.onFocus) {
                props.onFocus(event);
            }
        },
        [props]
    );

    const onBlur = useCallback((event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            if (event.target.value.length === 0) {
                setShrink(false);
            }
            if (props.onBlur) {
                props.onBlur(event);
            }
        },
        [props]
    );

    return (
        <MuiTextField
            {...props}
            onFocus={onFocus}
            onBlur={onBlur}
            InputLabelProps={{
                shrink: shrink,
                classes: {
                    shrink: clsx(
                        startAdornment && classes.inputLabelShrink,
                        props.InputLabelProps?.classes?.shrink
                    ),
                    root: clsx(
                        classes.inputLabelRoot,
                        props.InputLabelProps?.classes?.root
                    ),
                    ...props.InputLabelProps?.classes,
                },
                ...props.InputLabelProps,
            }}
            InputProps={{
                startAdornment: (
                    <InputAdornment
                        ref={startAdornmentRef}
                        variant="outlined"
                        position="start"
                    >
                        {startAdornment}
                    </InputAdornment>
                ),
            ...props?.InputProps
            }}
        />
    );
};

export default TextField;