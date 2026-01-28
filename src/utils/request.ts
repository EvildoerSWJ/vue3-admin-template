import axios from "axios"
import { AxiosResponse } from "axios"
import { AxiosError } from "axios"
import { InternalAxiosRequestConfig } from "axios"
import { AxiosInstance } from "axios"

const service:AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_API_BASEURL,
    timeout: 10000
})
// axios 实例拦截请求
service.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        return config
    },
    (error: AxiosError) => {
        return Promise.reject(error)
    }
)

// axios 实例拦截响应
service.interceptors.response.use(
    (response: AxiosResponse) => {
        return response
    },
    (error: any) => {
        return Promise.reject(error)
    }
)
export default service