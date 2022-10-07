import http from '@/libs';

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

export { login };
