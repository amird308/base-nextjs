export interface IInitialConfig {
    LANGUAGES: {
        [key: string]: { name: string, code: string, nativeName: string, direction: string }
    },
    [key: string]: any
}