import { IUser, IRouter } from './../../server/src/data/type';
import { MockMethod } from 'vite-plugin-mock';
import { users, Routes } from './data/index';
import {
    resultSuccess,
    resultError,
    getRequestToken,
    requestParams,
} from './_utils';
export default [
    {
        url: '/mock/api/getRouterAuth',
        method: 'post',
        response: ({ body }) => {
            let { uid } = body;
            //console.log(uid);
            let authRouteList: IRouter[] = [];
            const userInfo: IUser | undefined = users.find(
                (user) => user.id === uid,
            );
            console.log(userInfo);

            if (!uid) {
                return false;
            }
            userInfo?.auth.map((rid) => {
                Routes.map((route: IRouter) => {
                    if (rid === route.id) {
                        authRouteList.push(route);
                    }
                });
            });
            return resultSuccess([
                // code: 200,
                // message: 'okkk',
                ...authRouteList,
            ]);
        },
    },
] as MockMethod[];
