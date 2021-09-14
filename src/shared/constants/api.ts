import getConfig from "next/config";

const {publicRuntimeConfig} = getConfig();
export const API_URL = publicRuntimeConfig.API_URL;
export const HOME_API={
	GET_SECTIONS:"/home",
	productsBuckets:"/products/buckets/{type}"
};
