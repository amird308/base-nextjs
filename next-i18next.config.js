import getConfig from 'next/config';
const {publicRuntimeConfig} = getConfig();
export const LOCALE = publicRuntimeConfig.LOCALE;

module.exports = {
    i18n: {
        localeDetection:false,
        defaultLocale: LOCALE,
        locales: ['fa','en'],
    },
}