import http from '@/libs';
import { IUid } from '@/types';
/**
 * 获取路由权限数据
 * @param params
 * @returns
 */
function getRouterAuth(params: IUid) {
    // console.log(params);

    return http({
        url: '/getRouterAuth',
        method: 'post',
        data: params,
    }).catch((err) => {
        throw err;
    });
}
function login(params) {
    // console.log(params);

    return http({
        url: '/login',
        method: 'post',
        data: params,
    }).catch((err) => {
        throw err;
    });
}

export { login, getRouterAuth };
