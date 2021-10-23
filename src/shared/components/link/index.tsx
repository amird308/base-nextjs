import {FC, HTMLAttributeAnchorTarget} from 'react';
import NextLink from 'next/link';
import {useTranslation} from 'next-i18next';
import useStyles from "./style";
import clsx from "clsx";

interface ILinkProps {
    href: string
    className?: string
    locale?: string | undefined
    target?: HTMLAttributeAnchorTarget
}

const Link: FC<ILinkProps> = (props) => {
    const {i18n} = useTranslation();
    const styles = useStyles();
    return (
        <NextLink href={props.href} locale={props.locale ? props.locale : i18n.language}>
            <a className={clsx([styles.root, props?.className])} target={props.target}>
                {props.children}
            </a>
        </NextLink>

    )
}
export default Link