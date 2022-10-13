import http from '@/libs';
import { IEnglist, IWord, IWordId } from '@/types';
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
export { getEnglishList, addEnglish, deleteEnglish };
