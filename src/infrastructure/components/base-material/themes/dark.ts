import {PaletteOptions} from "@material-ui/core/styles/createPalette";

const dark: PaletteOptions = {
    type: "dark",
    primary: {
        main: "#F0515E",
        light: "rgba(237,48,64,0.15)",
        "100": "#f0505b",
        "200": "#f1606a"
    },
    secondary: {
        main: "#41bfb9",
        "100": "#5dc9c3",
        "200": "#6ccec9"
    },
    grey: {
        "100": "#2f2f2f",
        "200": "#5e5e5e",
        "300": "#979797",
        "400": "#cbcbcb",
        "500": "#e6e6e6",
        "600": "#f2f2f2",
        "700": "#f9f9f9"
    },
    error: {
        main: "#c30052",
        light: "#ed2e7e",
        contrastText: "#fff2f7"
    },
    success: {
        main: "#00966d",
        light: "#00ba88",
        contrastText: "#f3fdfa"
    },
    warning: {
        main: "#daa43d",
        light: "#f4b740",
        contrastText: "#fff8e1"
    },
    info: {
        main: "#168fdf",
        light: "#18a0ff",
        contrastText: "#ebf7ff"
    },
    text: {
        primary: "#2F2F2F",
        secondary: "#8F8F8F"
    }
};

export default dark;