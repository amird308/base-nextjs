import { atom, selector, useRecoilState } from "recoil";
import IUserInfo from "@/store/models/user-info";

const userInfo = atom<IUserInfo>({
    key: "userInfo",
    default: {
        information:{
            id: 0,
            name: ""
        }
    }
});

export const UserInfoSelector = selector<IUserInfo>({
    key: "filteredTodoListState",
    get: ({get}) =>  get(userInfo),
    set: ({set}, newValue)=> set(userInfo, newValue)
});


const useUserInfo = () => {
    const [userInfo, setUserInfo] = useRecoilState(UserInfoSelector);
    return{
        userInfo,
        setUserInfo
    };
};

export default useUserInfo;