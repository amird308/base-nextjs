import React from "react";
import {create} from "jss";
import rtl from "jss-rtl";
import useLanguage from "@/hooks/language";
import {jssPreset, StylesProvider} from "@material-ui/core/styles";
import {createGenerateClassName, CssBaseline, ThemeProvider} from "@material-ui/core";
import {mainTheme} from "@/infrastructure/components/base-material/theme";

const jss = create({plugins: [...jssPreset().plugins, rtl()]});

interface IBaseMaterial {
    children: any
}

const BaseMaterial = (props: IBaseMaterial) => {
    const language = useLanguage();
    const direction = language.direction;
    const theme = {...mainTheme};
    theme.direction = direction;
    /*    const generateClassName = createGenerateClassName({
            disableGlobal: true
        });*/
    return (
        /*<StylesProvider generateClassName={generateClassName} jss={jss}>*/
        <StylesProvider jss={jss}>
            <ThemeProvider theme={mainTheme}>
                <CssBaseline/>
                {props.children}
            </ThemeProvider>
        </StylesProvider>
    );
};
export default BaseMaterial;
