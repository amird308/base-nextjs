import React from "react";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    menu: {
        width: "100%",
        borderRight: 8,
        border: `1px solid ${theme.palette.grey[500]}`,
        boxShadow: `0px 0px 50px rgba(0, 0, 0, 0.03)`
    },
    list: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        "& > li":  {
            "padding-left": `${theme.spacing(4)}px`,
            "padding-right": `${theme.spacing(4)}px`,
        }
    }
}));

export default useStyles;