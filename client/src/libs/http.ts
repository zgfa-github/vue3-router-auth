import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
//mock模拟数据接口
const BASE_URL = '/mock/api';
//代理真实接口(解决跨域)
const PRO_URL = '/api';
const http = axios.create({
    baseURL: BASE_URL,
    timeout: 4000,
});
http.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        const token: string = localStorage.getItem('token') || '';
        //console.log(token);

        //config.headers.token = token;
        return config;
    },
    (error: Error) => {
        return Promise.reject(error);
    },
);

http.interceptors.response.use((res: AxiosResponse) => {
    //console.log(res);

    if (res.data.code === 1) {
        return Promise.reject(res.data.data);
    }
    return res.data.result;
});

export default http;
