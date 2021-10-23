import {makeStyles} from "@material-ui/core";

const useToastStyle = makeStyles(theme => ({
    base: {
        fontWeight: 400,
        borderRadius: 8,
        boxShadow: "unset",
    },
    success: {
        backgroundColor: theme.palette.success.light,
        color: theme.palette.success.dark,
        border: `solid 1px ${theme.palette.success.dark}`,
    },
    error: {
        backgroundColor: theme.palette.error.light,
        color: theme.palette.error.dark,
        border: `solid 1px ${theme.palette.error.dark}`,
    },
    info: {
        backgroundColor: theme.palette.info.light,
        color: theme.palette.info.dark,
        border: `solid 1px ${theme.palette.info.dark}`,
    },
    warning: {
        backgroundColor: theme.palette.warning.light,
        color: theme.palette.warning.dark,
        border: `solid 1px ${theme.palette.warning.dark}`,
    }
}));
export default useToastStyle;