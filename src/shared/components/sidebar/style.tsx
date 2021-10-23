import React from "react";
import {makeStyles, Theme} from "@material-ui/core";


const useStyles = makeStyles<Theme, any>((theme) => ({
    drawer: (props)=>({
        transition: "all .5s",
        width:  props.isOpen ? 240 : 72,
        flexShrink: 0,
    }),
    drawerPaper: (props)=>({
        transition: "all .5s",
        borderRadius: 0,
        width:  props.isOpen ? 240 : 72,
        marginTop: theme.spacing(8),
    }),
    drawerContainer: {
        transition: "all .5s",
        overflow: 'auto',
    },
    paddingProfileContainer:{
        paddingInline: theme.spacing(1)
    },
    profileContainer:{
        transition: "all .5s",
        padding: theme.spacing(.5),
        borderRadius: "100%",
        maxWidth: 96,
        border: `1px dashed ${theme.palette.grey[400]}`,
        marginTop: theme.spacing(4),
        display: "flex",
        margin:"auto",
    },
    profileImage:{
        transition: "all .5s",
        objectFit: "none",
        borderRadius: "100%",
    },
    contentContainer:{
        marginTop: theme.spacing(4)
    }
}))
export default useStyles;