import React from "react";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: `1px solid ${theme.palette.grey[400]}`,
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(3)
    },
    buttonLinks:{
        color: theme.palette.text.primary,
        margin: theme.spacing(1)
    },
    buttonLogin:{
        margin: theme.spacing(1)
    },
    footer: {
        borderTop: `1px solid ${theme.palette.grey[400]}`,
        paddingTop: theme.spacing(5),
        marginTop: theme.spacing(10),
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingBottom: theme.spacing(3)
    }
}));

export default useStyles;