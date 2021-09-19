import {createTheme} from "@material-ui/core";

const lightTheme = createTheme({
    props: {
        MuiTextField: {
            InputProps: {
                disableUnderline: true
            }
        },
        MuiTypography: {
            variantMapping: {
                subtitle1: "span",
                subtitle2: "span",
                body1: "span",
                body2: "span"
            }
        },
        MuiButton: {
            disableElevation: true
        }
    },
    palette: {
        background: {
            default: "#E5E5E5",
            paper: "#ffffff"
        },
        primary: {
            main: "#F0515E",
            light: "rgba(237,48,64,0.15)",
            "100": "#f0505b",
            "200": "#f1606a"
        },
        secondary: {
            main: "#41BFB9",
            "100": "#60C6C2",
            "200": "#60C6C2"
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
        }
    },
    overrides: {
        MuiIcon: {
            fontSizeSmall: {
                fontSize: 14
            },
            fontSizeLarge: {
                fontSize: 18
            }
        },
        MuiPaper: {
            root:{
                boxShadow: "none !important"
            }
        },
        MuiAppBar: {
            root: {
                borderBottom: "1px solid #E6E6E6",
                color: "#2F2F2F !important",
                boxShadow: "none"
            },
            colorPrimary: {
                backgroundColor: "#ffffff"
            }
        },
        MuiContainer: {
            maxWidthXl: {
                paddingRight: 24,
                paddingLeft: 24,
                maxWidth: 1676
            },
            maxWidthLg: {
                paddingRight: 24,
                paddingLeft: 24
            }
        },
        MuiButton: {
            text: {
                color: "#168fdf"
            },
            root: {
                borderRadius: 8
            },
            startIcon: {
                marginInlineEnd: 8
            }
        },
        MuiCard: {
            root: {
                boxShadow: "none",
                border: 0
            }
        }
    },
    typography: {
        h1: {},
        h3: {
            fontSize: 24,
            fontWeight: "bold"
        },
        h4: {
            fontSize: 20,
            fontWeight: "bold"
        },
        h5: {
            fontSize: 18,
            fontWeight: 500
        },
        h6: {
            fontSize: 16,
            fontWeight: "bold"
        },
        subtitle1: {
            fontSize: 18,
            fontWeight: "bold"
        },
        subtitle2: {
            fontSize: 14,
            fontWeight: 400
        },
        caption: {
            fontSize: 14,
            fontWeight: "bold"
        },
        body1: {
            fontSize: 16,
            fontWeight: 400
        },
        body2: {
            fontSize: 12,
            fontWeight: 400
        },
/*        fontFamily: "yekanbakh"*/
    }
});

export default lightTheme;