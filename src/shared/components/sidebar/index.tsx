import React, { FC } from "react";
import {Drawer} from "@material-ui/core";
import useStyles from "./style";
import Image from "next/image";
import Profile from "/public/images/profile.png";

interface ISidebar{
    isOpen?: boolean
}

const Sidebar: FC<ISidebar> = (props) => {
    const styles = useStyles({isOpen: props.isOpen});
    return (
        <Drawer
            className={styles.drawer}
            variant="permanent"
            classes={{
                paper: styles.drawerPaper,
            }}
        >
            <div className={styles.drawerContainer}>
                <div className={styles.paddingProfileContainer}>
                    <div className={styles.profileContainer}>
                        <Image className={styles.profileImage}
                               src={Profile}
                        />
                    </div>
                </div>
                <div className={styles.contentContainer}>
                    {props.children}
                </div>
            </div>
        </Drawer>
    )
}

export default Sidebar;