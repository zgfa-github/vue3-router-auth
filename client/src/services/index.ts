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
interface IEnglist {
    params: {
        info: {
            pageNum: number;
            pageSize: number;
            searchKey: string;
        };
    };
}
interface IWord {
    params: {
        index: number | null;
        world: string;
        chinese: string;
    };
}
interface IWordId {
    params: {
        english: null;
    };
}
function getEnglishList(params: IEnglist) {
    console.log(params);

    return http({
        url: '/getEnglishList',
        method: 'post',
        data: params,
    }).catch((err) => {
        console.log(err);

        throw err;
    });
}
function addEnglish(params: IWord) {
    return http({
        url: '/addEnglish',
        method: 'post',
        data: params,
    }).catch((err) => {
        console.log(err);

        throw err;
    });
}
function deleteEnglish(params: IWordId) {
    return http({
        url: '/deleteEnglish',
        method: 'post',
        data: params,
    }).catch((err) => {
        console.log(err);

        throw err;
    });
}
export {
    getRouterAuth,
    getCourseList,
    getDetailList,
    getEnglishList,
    addEnglish,
    deleteEnglish,
};
