import axios from 'axios' //*导入axios

import {
    getToken
} from '@/utilis/token.js' //*导入获取token方法


//!克隆axios方法 , 让克隆出来的axios默认携带请求头跟基地址
let indexQ = axios.create({
    baseURL: process.env.VUE_APP_URL, //!基地址
    headers: { //!请求头
        token: getToken()
    }

})

//todo  获取用户登录信息方法
export function get_user() {
    // return axios({
    //     url: process.env.VUE_APP_URL + "/info",
    //     method: 'get',
    //     //*携带请求头
    //     headers: {
    //         token: getToken()
    //     }
    // })
    return indexQ({
        url: "/info",
        method: 'get',
    })
}


//todo  退出用户登录
export function out_user() {
    // return axios({
    //     url: process.env.VUE_APP_URL + "/logout",
    //     method: 'get',
    //     //*携带请求头
    //     headers: {
    //         token: getToken()
    //     }
    // })
    return indexQ({
        url: "/logout",
        method: 'get',
    })
}