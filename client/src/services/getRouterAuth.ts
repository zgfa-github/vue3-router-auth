import http from '@/libs'
import {IUid } from '@/types'
function getRouterAuth(params: IUid) { 
    // console.log(params);
    
    return http({
        url: '/getRouterAuth',
        method: 'post',
        data: params
    }).catch(err => { 
        throw err;
    })
}

export { 
    getRouterAuth
}