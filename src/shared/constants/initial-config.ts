import { IInitialConfig } from "@/models/InitialConfig";

const INITIAL_CONFIG: IInitialConfig = {
    AUTHOR: "",
    TITLE: "",
    DESCRIPTION: "",
    SUMMARY: "",
    LATEST_LIMIT: 5,

    LABELS: {
        DEFAULT: "",
        LATEST: "",
        LIST: "",
    },

    EMAIL: "",
    GITHUB: "",
    TWITTER: "",
    DOMAIN: "",

    GOOGLE_ANALYTICS: "",
    CN: true,
    ENABLE_VIEWS: true,

    LANGUAGES: {
        en: { name: "English", code: "en", nativeName: "english", direction: "ltr" },
        fa: { name: "Persian", code: "fa", nativeName: "فارسی", direction: "rtl" },
        ar: { name: "Arabic", code: "ar", nativeName: "العربية", direction: "rtl" },
        fr: { name: "French", code: "fr", nativeName: "Français", direction: "ltr" }
    }
};

export default INITIAL_CONFIG;