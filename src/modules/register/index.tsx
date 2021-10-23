import {
    Box,
    Button,
    Container,
    Grid,
    IconButton,
    InputAdornment,
    NoSsr,
    Typography
} from "@material-ui/core";
import mvpLogoImg from "../../../resources/images/mvp-logo.svg";
import {Controller, useForm} from "react-hook-form";
import Icon from "@/components/icon";
import {VALIDATIONS_RULES} from "@/constants/validations_rules";
import {useState} from "react";
import IUserData from "@/modules/register/models/IUserData";
import {useStyle} from "@/modules/register/style";
import useRegister from "@/modules/register/hooks/register";
import Link from "@/components/link";
import {LINKS} from "@/constants/links";
import TextField from "@/components/form/input";


const Register = () => {
    const styles = useStyle();

    const {handleSubmit, control} = useForm<IUserData>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
        }
    });
    const register = useRegister();
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => setShowPassword(!showPassword);

    const onSubmit = (user: IUserData) => register.register(user);
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
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Box mb={3}>
                                    <Typography classes={{
                                        root: styles.headTitle
                                    }}>
                                        Register
                                    </Typography>
                                </Box>
                                <Box mb={2}>
                                    <Controller name={"name"}
                                                control={control}
                                                rules={{
                                                    required: VALIDATIONS_RULES.REQUIRED,
                                                }}
                                                render={({field, fieldState, formState}) => (
                                                    <TextField
                                                        value={field.value}
                                                        startAdornmentText={
                                                           <Icon ltrIcon={"icon-user"}/>
                                                        }
                                                        fullWidth
                                                        variant={"filled"}
                                                        label={"Name"}
                                                        onChange={field.onChange}
                                                        error={!!fieldState.error}
                                                        helperText={fieldState?.error ? (fieldState.error as any).message : null}
                                                    />
                                                )}/>
                                </Box>
                                <Box mb={2}>
                                    <Controller name={"email"}
                                                control={control}
                                                rules={{
                                                    required: VALIDATIONS_RULES.REQUIRED,
                                                    pattern: VALIDATIONS_RULES.EMAIL,
                                                }}
                                                render={({field, fieldState, formState}) => (
                                                    <TextField
                                                        value={field.value}
                                                        startAdornmentText={
                                                            <Icon ltrIcon={"icon-sms"}/>
                                                        }
                                                        fullWidth
                                                        variant={"filled"}
                                                        label={"Email"}
                                                        onChange={field.onChange}
                                                        error={!!fieldState.error}
                                                        helperText={fieldState?.error ? (fieldState.error as any).message : null}
                                                    />
                                                )}/>
                                </Box>
                                <Box mb={3}>
                                    <Controller name={"password"}
                                                control={control}
                                                rules={{
                                                    required: VALIDATIONS_RULES.REQUIRED,
                                                    pattern: VALIDATIONS_RULES.PASSWORD1,
                                                }}
                                                render={({field, fieldState, formState}) => (
                                                    <TextField
                                                        value={field.value}
                                                        startAdornmentText={
                                                            <Icon ltrIcon={"icon-lock"}/>
                                                        }
                                                        InputProps={{
                                                            endAdornment: (
                                                                <InputAdornment position="end">
                                                                    <NoSsr>
                                                                        <IconButton
                                                                            aria-label="toggle password visibility"
                                                                            onClick={togglePassword}
                                                                        >
                                                                            <Icon
                                                                                ltrIcon={showPassword ? "icon-eye" : "icon-eye-slash"}/>
                                                                        </IconButton>
                                                                    </NoSsr>
                                                                </InputAdornment>
                                                            )
                                                        }}
                                                        type={showPassword ? "text" : "password"}
                                                        fullWidth
                                                        variant={"filled"}
                                                        label={"Password"}
                                                        autoComplete="new-password"
                                                        onChange={field.onChange}
                                                        error={!!fieldState.error}
                                                        helperText={fieldState?.error ? (fieldState.error as any).message : null}
                                                    />
                                                )}/>
                                </Box>
                                <Box sx={{width: "100%"}} mb={3}>
                                    <Button disabled={register.isLoading == "loading"} type={"submit"} size={"large"}
                                            fullWidth color={"primary"}
                                            variant={"contained"}>
                                        register
                                    </Button>
                                </Box>

                            </form>


                            <Box mb={1}>
                                    <Typography component={"span"} variant={"body2"}>or</Typography>
                            </Box>
                            <Link href={LINKS.LOGIN}>
                                /Login
                            </Link>
                        </Grid>

                    </Grid>

                </Grid>
            </Container>
        </div>
    );
};

export default Register;