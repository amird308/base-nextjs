import {Button, Input, Paper} from "@material-ui/core";
import {useForm} from "react-hook-form";

const Home = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data: any) => {
        console.log(JSON.stringify(data));
    };

    return (
        <div>
            <Paper>
                <span> home </span>
                <Button color="primary" variant="outlined"> hi man </Button>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input {...register("firstName")} placeholder="First name" />
                    <Input {...register("lastName")} placeholder="Last name" />
                    <select {...register("category")}>
                        <option value="">Select...</option>
                        <option value="A">Category A</option>
                        <option value="B">Category B</option>
                    </select>
                    <input type="submit" />
                </form>
            </Paper>
        </div>
    );
};

export default Home;