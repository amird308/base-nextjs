import React from "react";
import {create} from "jss";
import rtl from "jss-rtl";
import useLanguage from "../../../shared/hooks/language";
import {jssPreset, StylesProvider} from "@material-ui/core/styles";
import {createTheme, CssBaseline, ThemeProvider} from "@material-ui/core";
import dark from "@/infrastructure/components/base-material/themes/dark";
import light from "@/infrastructure/components/base-material/themes/light";
import useTheme from "@/hooks/theme";
import themeComposer, {PaletteOptionsCustom} from "@/infrastructure/components/base-material/themes/composer";

const jss = create({plugins: [...jssPreset().plugins, rtl()]});

interface IBaseMaterial {
    children: any
}

const BaseMaterial = (props: IBaseMaterial) => {

    const language = useLanguage();
    const theme = useTheme();
    const currentTheme = createTheme({
        ...themeComposer(theme.currentTheme==="dark"?dark as PaletteOptionsCustom :light as PaletteOptionsCustom)
    })
    const direction = language.direction;
    currentTheme.direction = direction;

    return (
        <StylesProvider jss={jss}>
            <ThemeProvider theme={currentTheme}>
                <CssBaseline/>
                {props.children}
            </ThemeProvider>
        </StylesProvider>
    );
};
export default BaseMaterial;
