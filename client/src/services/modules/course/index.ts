import http from '@/libs';
function getCourseList() {
    return http({
        url: '/getCourseList',
        method: 'get',
    }).catch((err) => {
        throw err;
    });
}
export { getCourseList };
