import services from "../services";
import {useRouter} from "next/dist/client/router";
import {LINKS} from "@/constants/links";
import useStatus from "@/hooks/status";
import IUserLogin from "@/modules/login/models/IUserLogin";
import storageLocal from "@/helper/storage-local";
import STORAGE_LOCAL from "@/constants/storage-local";
import toast from "@/helper/toast";

const useLogin = () => {
    const [isLoading, setLoading] = useStatus("empty");
    const router = useRouter();
    const login = (user: IUserLogin) => {
        setLoading("loading");
        services.login(user)
            .then(async (res) => {
                if (res.data.results) {
                    storageLocal.set(STORAGE_LOCAL.TOKEN, res.data.user.token);
                    await router.replace(LINKS.HOME);
                } else {
                    toast.warning(res.data.message);
                }
            })
            .catch(reason => toast.error(reason.toString()))
            .finally(() => setLoading("empty"));
    };
    return {
        login,
        isLoading
    };
};
export default useLogin;