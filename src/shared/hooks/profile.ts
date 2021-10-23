import storageLocal from "@/helper/storage-local";
import STORAGE_LOCAL from "@/constants/storage-local";
import {LINKS} from "@/constants/links";
import {useRouter} from "next/dist/client/router";
import makeUrl from "@/helper/make-url";

const useProfile = () => {
    const router = useRouter();
    const logout=()=>{
        storageLocal.remove(STORAGE_LOCAL.TOKEN);
        router.replace(LINKS.LOGIN);
    };
    const pushToProfile=()=>{
        router.push(makeUrl(LINKS.PANEL,{tab: "profile"}));
    };
    return{
        logout,
        pushToProfile
    };
};

export default useProfile;
