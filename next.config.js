const fs = require("fs");
const dotenv = require("dotenv");
const Dotenv = require("dotenv-webpack");
const { i18n } = require("./next-i18next.config");
const path = require("path");

const NODE_ENV = (process.env.NODE_ENV || "development").trim();
const envConfig = dotenv.parse(fs.readFileSync(`.env.${NODE_ENV}`));
const shareEnv = dotenv.parse(fs.readFileSync(".env"));

const { API_URL, HOST_URL, LOCALE, PRODUCT_PREFIX} = { ...envConfig, ...shareEnv };

module.exports = {
  i18n,
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  publicRuntimeConfig: {
    API_URL,
    HOST_URL,
    LOCALE,
    PRODUCT_PREFIX,
  },
  webpack: (config) => {
    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: path.join(__dirname, ".env"),
        systemvars: true
      })
    ];
    return config;
  }
};
