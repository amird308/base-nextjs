import React, {FC, ReactElement, useRef, useState} from "react";
import { Button, Menu } from "@material-ui/core";
import useStyles from "./style";

interface IPopupMenuProps{
    contentButton: ReactElement,
    classNameButton?: string
}

const PopupMenu:FC<IPopupMenuProps> = (props) =>{
    const styles = useStyles();

    //TODO fix console bug
    const [anchorEl, setAnchorEl] = useState(null);
    const [widthEl, setWidthEl] = useState(0);
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
        setWidthEl(event.currentTarget.offsetWidth);
    };
    return(
        <>
            <Button
                onClick={handleClick}
                className={props?.classNameButton}>
                {props.contentButton}
            </Button>
            <Menu
                classes={{
                    paper:styles.menu,
                    list: styles.list
                }}
                style={{
                    color:"red",
                    width: `${widthEl}px`
                }}

                getContentAnchorEl={null}
                elevation={0}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                id="profile-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {props.children}
            </Menu>
        </>
    )
}

export default PopupMenu;