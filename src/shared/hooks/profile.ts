import storageLocal from "@/helper/storage-local";
import STORAGE_LOCAL from "@/constants/storage-local";
import {LINKS} from "@/constants/links";
import {useRouter} from "next/dist/client/router";


const useProfile = () => {
    const router = useRouter();
    const logout=()=>{
        storageLocal.remove(STORAGE_LOCAL.TOKEN);
        router.replace(LINKS.LOGIN);
    };

    return{
        logout,
    };
};

export default useProfile;
