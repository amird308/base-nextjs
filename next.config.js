const fs = require("fs");
const dotenv = require("dotenv");
const Dotenv = require("dotenv-webpack");
const {i18n} = require("./next-i18next.config");
const path = require("path");
const withImages = require("next-images");

const NODE_ENV = (process.env.NODE_ENV || "development").trim();
const envConfig = dotenv.parse(fs.readFileSync(`.env.${NODE_ENV}`));
const shareEnv = dotenv.parse(fs.readFileSync(".env"));

const {API_URL, HOST_URL, LOCALE, PRODUCT_PREFIX} = {...envConfig, ...shareEnv};

module.exports = {
  i18n,
  productionBrowserSourceMaps: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles/shard/styles')],
  },
  images: {
    domains: ["img.freepik.com", "cdn.dribbble.com"]
  },
  publicRuntimeConfig: {
    API_URL,
    HOST_URL,
    LOCALE,
    PRODUCT_PREFIX,
  },
  webpack: withImages((config) => {
    exclude: path.resolve(__dirname, 'public'),
        config.plugins = [
          ...config.plugins,
          new Dotenv({
            path: path.join(__dirname, ".env"),
            systemvars: true
          })
        ];
    return config;
  })
}
