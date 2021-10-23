import {API_URL} from "@/constants/api";
import axios from "axios";
import storageLocal from "@/helper/storage-local";
import STORAGE_LOCAL from "@/constants/storage-local";

const mainApi = axios.create({
	baseURL: API_URL
});
mainApi.interceptors.request.use(function(config) {
	const token = storageLocal.get(STORAGE_LOCAL.TOKEN);
	config.headers.Authorization = token?.length && token;
	return {
		...config,
	};
}, function(error) {
	return Promise.reject(error);
});
mainApi.interceptors.response.use(function(response) {
	return response;
}, function(error) {
	return Promise.reject(error);
});
export default mainApi;

