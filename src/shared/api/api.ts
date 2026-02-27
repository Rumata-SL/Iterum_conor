import axios, {AxiosRequestConfig} from "axios";
import {USER_LOCALSTORAGE_KEY} from "shared/const/localstorage";


export const $api = axios.create({
    baseURL: __API__,
});

$api.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) || "";
    config.headers = config.headers || {};
    config.headers.authorization = token;
    return config;
});

