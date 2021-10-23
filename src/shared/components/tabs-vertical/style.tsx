import React from "react";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 224,
    },

    tabRoot: {
        minWidth: "auto",
        paddingTop: 0,
        paddingBottom: 0,
        minHeight: 54,
        padding: 0
    },
    indicator:{
        left: 0,
        height: 48,
        width: 4,
        borderEndEndRadius: 10,
        borderStartEndRadius: 10,
        backgroundColor: theme.palette.primary.main
    },
    tabIcon: {
        "& :first-child": {
            fontWeight: 400,
            "font-size": "24px",
            "margin-bottom": "0px !important",
            "margin-inline-end": `${theme.spacing(2)}px`
        },
        "& :last-child": {
            "font-size": "16px",
        },
    },

    tabSelected: {
        color: theme.palette.primary.main
    },

    tabWrapper: {
        flexDirection: "row",
        justifyContent: "flex-start",
        marginInlineStart: theme.spacing(4)
    },
    tabTitle: {
        transition: `all .5s`,
        display:"none",
    },
    tabTitleActive:{
        transition: `all .5s`,
    }
}));

export default useStyles;