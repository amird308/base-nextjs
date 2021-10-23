import {useTranslation}  from "next-i18next";
import {Icon as MIcon} from "@material-ui/core";
import {typeIcons} from "@/components/icon/type";
import useStyles from "./style";
interface IPropsVidaIcon {
    ltrIcon?: typeIcons,
    rtlIcon?: typeIcons,
    className?: string,
    bold?: boolean,
    color?:  "inherit"| "primary"| "secondary"| "action"| "error"| "disabled";
    fontSize?: "default"| "inherit"| "large"| "medium"| "small";
}
const Icon = ({rtlIcon, ltrIcon, className,bold, ...otherProps}: IPropsVidaIcon) =>{
    const styles = useStyles();
    const { i18n } = useTranslation();
    let iconName: string | undefined;
    if(!ltrIcon || !rtlIcon) {
        iconName = !rtlIcon? ltrIcon : rtlIcon;
    } else{
        iconName = i18n?.dir?.()==="rtl" ? rtlIcon : ltrIcon ;
    }
    return(
        <MIcon {...otherProps} className={`${iconName} ${bold  ? styles.bold :""} ${className ? className : ""}`} />
    );
};
export default Icon;