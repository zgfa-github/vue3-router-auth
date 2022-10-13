import http from '@/libs';
function getDetailList() {
    return http({
        url: '/getDetailList',
        method: 'get',
    }).catch((err) => {
        throw err;
    });
}
export { getDetailList };
