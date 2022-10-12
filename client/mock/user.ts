import { MockMethod } from 'vite-plugin-mock';
import {
    resultSuccess,
    resultError,
    getRequestToken,
    requestParams,
} from './_utils';
export function createUserList() {
    return [
        {
            userId: '1',
            username: 'vben',
            realName: 'Vben Admin',
            avatar: 'https://q1.qlogo.cn/g?b=qq&nk=190848757&s=640',
            desc: 'manager',
            password: '123456',
            token: 'fakeToken1',
            roles: [
                {
                    roleName: 'Super Admin',
                    value: 'super',
                },
            ],
        },
        {
            userId: '2',
            username: '13679898380',
            password: '123456',
            realName: 'test user',
            avatar: 'https://q1.qlogo.cn/g?b=qq&nk=339449197&s=640',
            desc: 'tester',
            token: 'fakeToken2',
            roles: [
                {
                    roleName: 'Tester',
                    value: 'test',
                },
            ],
        },
    ];
}
export default [
    // mock user login
    {
        url: '/mock/api/login',
        timeout: 3000,
        method: 'post',
        response: ({ body }) => {
            const { username, password } = body;
            const checkUser = createUserList().find(
                (item) =>
                    item.username === username && item.password === password,
            );
            if (!checkUser) {
                return resultError('用户或密码错误！');
                console.log('账户错误');
            }
            const {
                userId,
                username: _username,
                token,
                realName,
                desc,
                roles,
            } = checkUser;
            return resultSuccess({
                roles,
                userId,
                username: _username,
                token,
                realName,
                desc,
            });
        },
    },
    //获取用户信息
    {
        url: '/mock/api/getUserInfo',
        method: 'get',
        response: (request: requestParams) => {
            const token = getRequestToken(request);
            if (!token) return resultError('Invalid token');
            const checkUser = createUserList().find(
                (item) => item.token === token,
            );
            if (!checkUser) {
                return resultError(
                    'The corresponding user information was not obtained!',
                );
            }
            return resultSuccess(checkUser);
        },
    },
    {
        url: '/mock/api/logout',
        method: 'get',
        response: (request: requestParams) => {
            console.log(request);

            const token = getRequestToken(request);
            if (!token) return resultError('Invalid token');
            const checkUser = createUserList().find(
                (item) => item.token === token,
            );
            console.log(checkUser);

            if (!checkUser) {
                return resultError('Invalid token');
            }
            return resultSuccess(undefined, { message: '用户退出成功' });
        },
    },
] as MockMethod[];
