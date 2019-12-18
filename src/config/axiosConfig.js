import qs from 'qs'
import {
    type
} from 'os';

/**
 * axios全局配置
 */
let axiosConfig = {
    url: '/',
    method: 'POST',
    baseURL: 'http://127.0.0.1/app',

    // `transformRequest` 允许在向服务器发送前，修改请求数据
    // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
    // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
    transformRequest: [function (data) {
        // 对 data 进行任意转换处理
        if (typeof (data) == 'string') {
            return data;
        } else {
            data = qs.stringify(data);
            return data;
        }
    }],

    // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
    transformResponse: [function (data) {
        // 对 data 进行任意转换处理
        if (typeof (data) == 'string') {
            data = JSON.parse(data);
            return data;
        } else if (typeof (data) == 'object') {
            return data;
        }
    }],

    // `headers` are custom headers to be sent 
    headers: {
        'Content-Type': 'text/plain; charset=utf-8'
    },

    // `params` are the URL parameters to be sent with the request 
    // Must be a plain object or a URLSearchParams object 
    params: {},

    // `paramsSerializer`是一个可选的函数，负责序列化`params`
    paramsSerializer: function (params) {
        return Qs.stringify(params)
    },

    data: {},

    timeout: 60000,
    retryDelay: 1000, //超时请求重试延时时间，单位ms
    retry: 0, //超时请求重试次数
    // `withCredentials`指示是否跨站点访问控制请求
    withCredentials: false, // default 

    // `auth'表示应该使用 HTTP 基本认证，并提供凭据。
    // 这将设置一个`Authorization'头，覆盖任何现有的`Authorization'自定义头，使用`headers`设置。
    // auth: {
    //   username: 'janedoe',
    //   password: 's00pers3cret'
    // },

    // “responseType”表示服务器将响应的数据类型
    // options are 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream' 
    responseType: 'json', // default 
};

const plugin = {
    install(Vue) {
        Vue.axiosCfg = axiosConfig;
        Vue.prototype.$axiosCfg = axiosConfig;
    },
    $axiosCfg: axiosConfig
}
export default plugin
export const install = plugin.install