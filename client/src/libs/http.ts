import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
const BASE_URL = '/mock/api';
const PRO_URL = '/api'
const http = axios.create({
    baseURL: PRO_URL,
    timeout: 4000
})
axios.interceptors.request.use((config: AxiosRequestConfig) => {
    return config
}, (error: Error) => { return Promise.reject(error) })

axios.interceptors.response.use((res: AxiosResponse) => { 
    return res
})

export default http