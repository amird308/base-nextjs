import App from 'next/app';
import type { AppContext, AppProps } from 'next/app';
import {appWithTranslation} from 'next-i18next';
import storageCookie from "../src/shared/helper/storage-cookie";
import INITIAL_CONFIG from "../src/shared/constants/initial-config";

interface IMyAppExtensionProps extends AppProps{
  locale: {
    code: string,
    direction: string
  }
}

function MyApp({locale, Component, pageProps }: IMyAppExtensionProps) {
  if (typeof (document) !== "undefined") {
    document.body.lang = locale.code;
    document.body.dir = locale.direction;
  }

  return <Component {...pageProps} />
}




MyApp.getInitialProps = async (appContext: AppContext) => {
  const ctx = appContext.ctx;
  let locale = INITIAL_CONFIG.LANGUAGES[ctx.locale as string];
  if (ctx.pathname === "/") {
    const lastLocale = storageCookie.get(ctx?.req, "NEXT_LOCALE");
    locale = lastLocale ? INITIAL_CONFIG.LANGUAGES[lastLocale] : INITIAL_CONFIG.LANGUAGES[ctx?.defaultLocale as string];
  }
  const appProps = await App.getInitialProps(appContext);
  return {
    locale,
    ...appProps
  }
}

// @ts-ignore
export default appWithTranslation(MyApp);
