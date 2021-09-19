import React from "react";
import {makeStyles} from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    appBar: {
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShiftOpen: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    appBarShiftClose: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${theme.spacing(7) + 1}px)`,
        [theme.breakpoints.up("sm")]: {
            width: `calc(100% - ${theme.spacing(9) + 1}px)`,
        },
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: "none",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
    },
    drawerOpen: {
        overflowX: "hidden",
        width: drawerWidth,
        borderRight: "5px solid",
        borderRightColor:theme.palette.primary.main,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        borderRight: "5px solid",
        borderRightColor:theme.palette.primary.main,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: "hidden",
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbarSaidBar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        marginTop: theme.spacing(8),
        padding: theme.spacing(4),
    },
    menuItem:{
        color: theme.palette.text.primary,
        borderRadius: theme.spacing(2,0,0,2),
        "&:hover": {
            background: theme.palette.primary.main,
        },
        marginInlineStart: theme.spacing(2),
    },
    menuItemActive:{
        background: theme.palette.primary.main
    },
    menuItemIcon:{
        minWidth: theme.spacing(4)
    }
}));

export default useStyles;