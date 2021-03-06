// import axios from 'axios';


// import {
//     getToken
// } from '@/utilis/token.js' //*导入获取token方法

// //克隆axios
// let userQ = axios.create({
//     baseURL: process.env.VUE_APP_URL, //!基地址
//     // headers: { //请求头
//     //     token: getToken()
//     // }

// });


// //!axios拦截器 ,只要是通过userQ发送的请求都会被拦截下来,config就是被拦截下来的请求的配置
// userQ.interceptors.request.use(function (config) {

//         //给每一次放松请求拦截下来后加一个请求头token
//         config.headers.token = getToken();
//         return config
//     },
//     err => {
//         return Promise.reject(err)
//     })



import requestQ from '@/utilis/request'

//获取用户信息

export function get_user(params) {

    return requestQ({
        url: '/user/list',
        method: 'get',
        params
    })
}

//修改用户状态

export function change_user(data) {

    return requestQ({
        url: '/user/status',
        method: 'post',
        data
    })
}


//新增用户

export function add_user(data) {

    return requestQ({
        url: '/user/add',
        method: 'post',
        data
    })
}

//修改用户
export function edit_user(data) {

    return requestQ({
        url: '/user/edit',
        method: 'post',
        data
    })
}


//删除用户
export function remove_user(data) {

    return requestQ({
        url: '/user/remove',
        method: 'post',
        data
    })
}
