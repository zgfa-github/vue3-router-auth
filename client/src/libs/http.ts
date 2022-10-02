import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
//mock 模拟数据
const BASE_URL = '/mock/api';
//代理真实接口
const PRO_URL = '/api'
const http = axios.create({
    baseURL: PRO_URL,
    timeout: 4000
})
http.interceptors.request.use((config: AxiosRequestConfig) => {
    return config
}, (error: Error) => { return Promise.reject(error) })

http.interceptors.response.use((res: AxiosResponse) => { 
    //console.log(res);
    
    if (res.data.code === 1) {
        return Promise.reject(res.data.data);
     }
    return res.data.data;
})

export default http