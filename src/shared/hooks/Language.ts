import { useTranslation } from "next-i18next";
import INITIAL_CONFIG from "@/constants/initial-config";
import { useRouter } from "next/dist/client/router";
import storageLocal from "@/helper/storage-local";

const useLanguage = () => {
    const router = useRouter();
    const { i18n } = useTranslation();
    //@ts-ignore
    const locales: string[] = i18n?.options?.locales || [];

    const languages = locales.map(lan => (INITIAL_CONFIG.LANGUAGES[lan]));

    const currentLanguage = INITIAL_CONFIG.LANGUAGES[i18n.language];

    const changeLanguage = (locale: string) => {
        storageLocal.set("NEXT_LOCALE", locale);
        router.push("", "", { locale });
    };
    return {
        languages: languages,
        currentLanguage,
        changeLanguage,
        direction: i18n.dir?.()
    };
};

export default useLanguage;
