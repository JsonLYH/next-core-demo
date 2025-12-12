import axios, { InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { showMessage } from '@/utils/index'
const baseURL = "";
const service = axios.create({
    baseURL: baseURL,
    timeout: 60000,
    headers: {
        'content-type': 'application/json; charset=utf-8'
    }
})

// 异常拦截处理器
const errorHandler = (error: AxiosError) => {
    if (error.response) {
        //以下的showMessage仅在客户端生效
        switch (error.response.status) {
            case 401:
                // 登录过期错误处理
                showMessage("登录过期，请重新登录", 'error', 3000);
                break;
            case 500:
                // 服务器错误处理
                showMessage("服务器错误，请联系管理员", 'error', 3000);
                break;
            case 503:
                // 服务器错误处理
                showMessage("服务器错误，请联系管理员", 'error', 3000);
                break;
            case 404:
                showMessage("请求的资源不存在", 'error', 3000);
                break;
            default:
        }
    }
    return Promise.reject(error);
};

service.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    config.headers = config.headers || {};
    // if (getToken()) {
    //     // 判断是否存在 token, 如果存在的话, 则每个 http header 都加上 token
    //     config.headers['Authorization'] = "Bearer " + getToken()
    // }
    return config;
}, errorHandler)

service.interceptors.response.use((res: any) => {
    return new Promise(async (resolve, reject) => {
        if (res.data.code == 403) {
            //仅在客户端生效
            showMessage("权限不足，请联系管理员", 'warning', 3000);
            return reject(res);
        }
        if (res.data.code == 500) {
            //仅在客户端生效
            showMessage("服务器错误，请联系管理员", 'error', 3000);
            return reject(res);
        }
        if (res.data.code == 200) {
            //仅在客户端生效
            showMessage("请求成功", 'success', 3000);
            if (res.data.data && res.data.data.code === 200) {
                return resolve(res.data.data)
            }
        }
        return resolve(res);
    })
}, errorHandler)

export default service