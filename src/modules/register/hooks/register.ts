import IUserData from "../models/IUserData";
import services from "../services";
import {useRouter} from "next/dist/client/router";
import {LINKS} from "@/constants/links";
import useStatus from "@/hooks/status";
import toast from "@/helper/toast";

const useRegister = () => {
    const [isLoading, setLoading] = useStatus("empty");
    const router = useRouter();
    const register = (user: IUserData) => {
        setLoading("loading");
        services.register(user)
            .then(async (res) => {
                if (res.data.results) {
                    await router.replace(LINKS.LOGIN);
                } else {
                    toast.warning(res.data.message);
                }
            })
            .catch(reason => toast.error(reason.toString()))
            .finally(() => setLoading("empty"));
    };
    return {
        register,
        isLoading
    };
};
export default useRegister;