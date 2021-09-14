import {API_URL} from "@/constants/api";
import axios from "axios";

const mainApi = axios.create({
	baseURL: API_URL
});
mainApi.interceptors.request.use(function(config) {
	return config;
}, function(error) {
	return Promise.reject(error);
});
mainApi.interceptors.response.use(function(response) {
	return response;
}, function(error) {
	return Promise.reject(error);
});
export default mainApi;