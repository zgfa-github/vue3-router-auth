import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
//mock模拟数据接口，也可以把这些变量写在环境变量当中
const BASE_URL = '/mock/api';
//代理真实接口(解决跨域)
const PRO_URL = '/api';
const http = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
});
http.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        const token: string = localStorage.getItem('token') || '';
        console.log('请求拦截');

        console.log(config);

        //config.headers.token = token;
        return config;
    },
    (error: Error) => {
        return Promise.reject(error);
    },
);

http.interceptors.response.use(
    (res: AxiosResponse) => {
        // console.log('请求响应成功');

        // console.log(res);
        if (res.data.code === 1) {
            return Promise.reject(res.data.data);
        }
        return res.data.result;
    },
    (error: Error) => {
        console.log(error);
        return Promise.reject(error);
    },
);

export default http;
