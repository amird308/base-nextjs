import React, {FC} from "react";
import {
    AppBar, Badge, Box, Drawer, IconButton, List,
    ListItem, ListItemIcon, ListItemText, Toolbar, Typography
} from "@material-ui/core";
import useStyles from "./style";
import clsx from "clsx";
import Icon from "@/components/icon";
import useTheme from "@/hooks/theme";

const Layout: FC = (props) => {
    const styles = useStyles();
    const [open, setOpen] = React.useState(true);
    const theme = useTheme();
    const handleDrawerToggle = () => {
        setOpen((pre) => (!pre));
    };
    return (
        <div className={styles.root}>
            <AppBar
                position="fixed"
                className={clsx(styles.appBar, {
                    [styles.appBarShiftOpen]: open,
                    [styles.appBarShiftClose]: !open,
                })}
            >
                <Toolbar className={styles.toolbar}>
                    <Typography variant="h6" noWrap>
                        hi man
                    </Typography>
                    <Box p={2}>
                        <IconButton>
                            <Badge badgeContent={4} color="secondary">
                                <Icon ltrIcon={"notifications_none"}/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Icon ltrIcon={"account_circle"}/>
                        </IconButton>
                        <IconButton onClick={()=> theme.changeTheme()}>
                            <Icon ltrIcon={theme.currentTheme ==="dark" ? "brightness_2" : "wb_sunny"}/>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(styles.drawer, {
                    [styles.drawerOpen]: open,
                    [styles.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [styles.drawerOpen]: open,
                        [styles.drawerClose]: !open,
                    }),
                }}
            >
                <div className={styles.toolbar}>
                    <IconButton onClick={handleDrawerToggle}>
                        <Icon ltrIcon={open ? "arrow_back_ios" : "menu"} rtlIcon={open ? "arrow_forward_ios" : "menu"}/>
                    </IconButton>
                </div>
                <List>
                    {["All mail", "Trash", "Spam"].map((text, index) => (
                        <ListItem
                            className={clsx(styles.menuItem, {
                                /*             [styles.menuItemActive]: true*/
                            })}
                            button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <Icon rtlIcon={"star"}/> :
                                <Icon rtlIcon={"star"}/>}</ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <main className={styles.content}>
                {props.children}
            </main>
        </div>
    );
};


export default Layout;