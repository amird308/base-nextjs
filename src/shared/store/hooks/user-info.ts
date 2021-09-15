import {useRecoilValue} from "recoil";
import {getUserInfo} from "@/store/user-info";

const useUserInfo = () => {
    const userInfo = useRecoilValue(getUserInfo);
    const setUserInfo = useRecoilValue(getUserInfo);
    return{
        userInfo
    };
};

export default useUserInfo;