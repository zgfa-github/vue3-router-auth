import http from '@/libs';

export const getGoodsList = () => {
    return http({
        url: '/getGoodsList',
        method: 'get',
    }).catch((err) => {
        throw err;
    });
};
//export { getGoodsList };
