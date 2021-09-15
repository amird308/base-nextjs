import { atom, selector } from "recoil";
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

export const getUserInfo = selector<IUserInfo>({
    key: "filteredTodoListState",
    get: ({get}) =>  get(userInfo),
    set: ({set}, newValue)=> set(userInfo, newValue)
});