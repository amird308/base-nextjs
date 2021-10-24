import {
    Box, Button,
    Container,
    Grid,
    Typography
} from "@material-ui/core";
import mvpLogoImg from "/public/svg/logo.svg";
import {useStyle} from "@/modules/login/style";
import Link from "@/components/link";
import {LINKS} from "@/constants/links";
import Form from "@/components/form/form";
import TextFieldForm from "@/components/form/text-field";
import SelectForm from "@/components/form/select";

const Login = () => {
    const styles = useStyle();
    return (
        <div className={styles.root}>
            <div className={styles.background}>
                <img className={styles.mvpLogo} src={mvpLogoImg.src}/>
            </div>
            <Container>
                <Grid container
                      direction={"row"}
                      alignContent={"center"}
                      style={{minHeight: "100vh"}}
                >
                    <Grid lg={5} md={5} sm={6}
                          item
                    >
                        <Grid item
                              lg={10}
                              md={10}
                              sm={10}
                              container
                              direction={"column"}
                        >
                            <Form defaultValues={{name: "amir", age: 10}} onSubmit={((values: any) => console.log(values))}>
                                <TextFieldForm label={"name"} variant={"filled"} name={"name"}/>
                                <SelectForm options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} name={"age"} />
                                <Button type={"submit"}> hi man </Button>
                            </Form>

                            <Box mb={1}>
                                <Typography component={"span"} variant={"body2"}>or</Typography>
                            </Box>
                            <Link href={LINKS.REGISTER}>
                                /Register
                            </Link>
                        </Grid>

                    </Grid>

                </Grid>
            </Container>
        </div>
    );
};

export default Login;