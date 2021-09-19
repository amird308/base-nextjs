import appState from "@/store/app";
import {useRecoilState} from "recoil";
import IAppMiddleware from "@/models/middleware-store/app";

const useAppMiddleware = ():IAppMiddleware => {
    const [app, setApp] = useRecoilState(appState);

    const toggleTheme = () => {
        setApp(pre => ({...pre, theme:pre.theme === "light" ? "dark" : "light" }));
    };
    return{
        theme: app.theme,
        toggleTheme: toggleTheme,
    };
};

export default useAppMiddleware;