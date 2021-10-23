import IApp from "@/models/store/app";
import { atom } from "recoil";

const appState = atom<IApp>({
    key: "appState",
    default: {
        theme: "light"
    }
});

export default appState;