import React from "react";
import {create} from "jss";
import rtl from "jss-rtl";
import useLanguage from "@/hooks/Language";
import {jssPreset, StylesProvider} from "@material-ui/core/styles";
import { CssBaseline, ThemeProvider} from "@material-ui/core";
import darkTheme from "@/infrastructure/components/base-material/dark-theme";
import lightTheme from "@/infrastructure/components/base-material/light-theme";
import useTheme from "@/hooks/theme";

const jss = create({plugins: [...jssPreset().plugins, rtl()]});

interface IBaseMaterial {
    children: any
}

const BaseMaterial = (props: IBaseMaterial) => {
    const language = useLanguage();
    const theme = useTheme();
    const direction = language.direction;
    const currentTheme = {...theme.currentTheme==="dark"?darkTheme:lightTheme};
    currentTheme.direction = direction;
    /*    const generateClassName = createGenerateClassName(
            disableGlobal: true
        });*/
    return (
        /*<StylesProvider generateClassName={generateClassName} jss={jss}>*/
        <StylesProvider jss={jss}>
            <ThemeProvider theme={currentTheme}>
                <CssBaseline/>
                {props.children}
            </ThemeProvider>
        </StylesProvider>
    );
};
export default BaseMaterial;
