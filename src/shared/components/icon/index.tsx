import {useTranslation}  from "next-i18next";
import {Icon as MIcon} from "@material-ui/core";

interface IPropsVidaIcon {
    ltrIcon?: string,
    rtlIcon?: string,
    className?: string,
    color?:  "inherit"| "primary"| "secondary"| "action"| "error"| "disabled";
    fontSize?: "default"| "inherit"| "large"| "medium"| "small";
}
const Icon = ({rtlIcon, ltrIcon, className, ...otherProps}: IPropsVidaIcon) =>{
    const { i18n } = useTranslation();
    let iconName: string | undefined;
    if(!ltrIcon || !rtlIcon) {
        iconName = !rtlIcon? ltrIcon : rtlIcon;
    } else{
        iconName = i18n?.dir?.()==="rtl" ? rtlIcon : ltrIcon ;
    }
    return(
        <MIcon {...otherProps} className={`${className ? className : ""}`}>
            {iconName}
        </MIcon>
    );
};
export default Icon;