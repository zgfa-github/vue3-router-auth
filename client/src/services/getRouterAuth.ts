import http from '../libs'
import {IUid } from '../types'
function getRouterAuth(params: IUid) { 
    return http({
        url: '/getRouterAuth',
        method: 'post',
        data: params
    })
}

export { 
    getRouterAuth
}