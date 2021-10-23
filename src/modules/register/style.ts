import {makeStyles} from "@material-ui/core";
import registerBgImg from "../../../resources/images/register-bg.png";

export const useStyle = makeStyles((theme) => ({
    background: {
        position: "absolute",
        backgroundColor: "#ED8307",
        mixBlendMode: "normal",
        right: 0,
        [theme.breakpoints.up("sm")]: {
            width: "50%",
        },
        [theme.breakpoints.up("md")]: {
            width: "59%",
        },
        [theme.breakpoints.up("xl")]: {
            width: "55%",
        },
        height: "100%",
        "&:after": {
            content: "''",
            position: "absolute",
            backgroundImage: `url(${registerBgImg.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            opacity: 0.11,
            width: "100%",
            height: "100%",
        }
    },
    mvpLogo: {
        position: "absolute",
        margin: "auto",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        maxWidth: "80%"
    },
    root: {
        height: "100vh",
    },
    headTitle: {
        fontSize: "40px",
        color: "#0C0C0C",
        fontWeight: 700
    },
}));