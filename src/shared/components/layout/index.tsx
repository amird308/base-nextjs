import React, {FC} from "react";
import useStyles from "./style";
import {Box, Button, Container} from "@material-ui/core";
import SvgHeaderLanding from "/public/svg/logo.svg";
import Link from "@/components/link";
import {LINKS} from "@/constants/links";
import Image from "next/image";

const Layout: FC = (props) => {
    const styles = useStyles();
    return (
        <Container maxWidth={"md"}>
            <div className={styles.header}>
                <div>
                    <Image src={SvgHeaderLanding}/>
                </div>
                <Box display={"flex"}>
                    <Link href={LINKS.HOME}>
                        <Button className={styles.buttonLinks}>
                            Home Page
                        </Button>
                    </Link>
                    <Link href={LINKS.ABOUT_US}>
                        <Button className={styles.buttonLinks}>
                            About Us
                        </Button>
                    </Link>
                    <Link href={LINKS.LOGIN}>
                        <Button className={styles.buttonLogin}  variant={"outlined"}>
                            Login
                        </Button>
                    </Link>

                    <Link href={LINKS.REGISTER}>
                        <Button className={styles.buttonLogin} color={"primary"} variant={"contained"}>
                            Register
                        </Button>
                    </Link>
                </Box>
            </div>
            {props.children}
            <div className={styles.footer}>
                <Image src={SvgHeaderLanding} height={32} width={272} />
                <Box display={"flex"} mt={2}>
                    <Link href={LINKS.HOME}>
                        <Button className={styles.buttonLinks}>
                            Home Page
                        </Button>
                    </Link>
                    <Link href={LINKS.ABOUT_US}>
                        <Button className={styles.buttonLinks}>
                            About Us
                        </Button>
                    </Link>
                </Box>
            </div>
        </Container>
    );
};


export default Layout;