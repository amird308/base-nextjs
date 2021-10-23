import {ThemeOptions} from "@material-ui/core";

import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import {PaletteColorOptions, PaletteOptions, SimplePaletteColorOptions} from "@material-ui/core/styles/createPalette";

const breakpoints = createBreakpoints({});

const extraStyles = {
    boxShadow: {
        main: "0px 0px 50px rgba(0, 0, 0, 0.05)"
    },
    radius: {
        main: 8
    }
}

export interface PaletteOptionsCustom extends PaletteOptions{
    primary?: SimplePaletteColorOptions,
    secondary?: SimplePaletteColorOptions,
    error?: SimplePaletteColorOptions;
    warning?: SimplePaletteColorOptions;
    info?: SimplePaletteColorOptions;
    success?: SimplePaletteColorOptions;
}

const themeComposer = (palette: PaletteOptionsCustom): ThemeOptions => {
    return {
        // TODO set form config
        // direction: "rtl",
        // font
        palette: {
            error: {
                light: "#FFF2F2",
                main: "#ED2E2E",
                dark: "#C30000",
                contrastText: "#FFFFFF"
            },
            success: {
                light: "#F3FDFA",
                main: "#00BA88",
                dark: "#00966D",
                contrastText: "#FFFFFF"
            },
            warning: {
                light: "#FFF8E1",
                main: "#F4B740",
                dark: "#A9791C",
                contrastText: "#FFFFFF"
            },
            ...palette,
        },
        props: {
            MuiTextField: {
                InputLabelProps: {},
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
            MuiFilledInput: {
                disableUnderline: true
            },
            MuiButton: {
                disableElevation: true
            }
        },
        overrides: {
            MuiPaper: {
                root: {
                    borderRadius: extraStyles.radius.main,
                    boxShadow: extraStyles.boxShadow.main
                }
            },
            MuiDrawer: {
                paperAnchorDockedLeft: {
                    borderRight: "none",
                    boxShadow: extraStyles.boxShadow.main
                }
            },
            MuiIcon: {
                fontSizeSmall: {
                    fontSize: 14
                },
                fontSizeLarge: {
                    fontSize: 18
                }
            },
            MuiInputBase: {
                root: {
                    border: `1px solid ${palette?.grey?.[500]}`,
                    borderTopRightRadius: "8px !important",
                    borderTopLeftRadius: "8px !important",
                    borderBottomRightRadius: "8px !important",
                    borderBottomLeftRadius: "8px !important",
                    backgroundColor: `${palette.background?.paper}  !important`,
                    "&$focused": {
                        border: `1px solid ${palette?.primary?.main} !important`,
                        color: palette?.primary?.main,
                        boxShadow: `0px 0px 0px 5px rgba(7, 113, 237, 0.1) !important`
                    },
                },
                input: {
                    borderRadius: 8,
                    WebkitBoxShadow: "0 0 0 1000px white inset",
                    "&:-webkit-autofill": {
                        WebkitBoxShadow: "0 0 0 1000px white inset",
                    },
                },
            },
            MuiAppBar: {
                root: {
                    boxShadow: extraStyles.boxShadow.main
                },
                colorPrimary: {
                    backgroundColor: palette.background?.paper
                }
            },
            MuiToolbar: {
                gutters: {
                    [breakpoints.up('sm')]: {
                        paddingLeft: 32,
                        paddingRight: 32,
                    },
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
                containedSecondary: {
                    color: "#fff"
                },
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
            h2: {},
            h3: {
                fontWeight: 700,
                fontSize: 32
            },
            h4: {
                fontWeight: 800,
                fontSize: 28
            },
            h5: {
                fontWeight: 700,
                fontSize: 16
            },
            h6: {
                fontWeight: 400,
                fontSize: 16
            },
            body1: {
                fontWeight: 300,
                fontSize: 16
            },
            body2: {
                fontWeight: 700,
                fontSize: 14
            },
            subtitle1: {
                fontWeight: 300,
                fontSize: 12
            },
            subtitle2: {
                fontWeight: 400,
                fontSize: 12
            },
            caption: {
                fontWeight: 400,
                fontSize: 10
            },
            fontFamily: "Open Sans"
        }
    }
}


export default themeComposer;