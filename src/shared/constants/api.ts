import getConfig from "next/config";

const {publicRuntimeConfig} = getConfig();
export const API_URL = publicRuntimeConfig.API_URL;

export const API = {

};
