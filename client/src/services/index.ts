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
function getCourseList() {
    return http({
        url: '/getCourseList',
        method: 'get',
    }).catch((err) => {
        throw err;
    });
}
function getDetailList() {
    return http({
        url: '/getDetailList',
        method: 'get',
    }).catch((err) => {
        throw err;
    });
}
export { getRouterAuth, getCourseList, getDetailList };
