import {useRecoilState} from "recoil";
import appState from "../../store/app";

const useAppStore = () => {
    const [app, setApp] = useRecoilState(appState);

    const toggleTheme = () => {
        setApp(pre => ({...pre, theme:pre.theme === "light" ? "dark" : "light" }));
    };
    return{
        theme: app.theme,
        toggleTheme,
    };
};

export default useAppStore;