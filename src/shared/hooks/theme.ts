import useAppStore from "@/store/middleware/app";

const useTheme = () => {
    const appStore = useAppStore();
    return {
        currentTheme: appStore.theme,
        changeTheme: appStore.toggleTheme,
    };
};

export default useTheme;
