import { IRouter, IState } from '@/types';
import { SET_AUTH, SET_ROUTE_TREE, SET_TOKEN } from './actionTypes';
/**
 * @param {mutations}
 * 改变状态值
 */
export default {
    [SET_ROUTE_TREE](state: IState, routeTree: IRouter[]) {
        state.routeTree = routeTree;
    },
    [SET_AUTH](state: IState, auth: boolean) {
        console.log('mutations,改变路由权限是否' + auth);
        state.hasAuth = auth;
    },
    [SET_TOKEN](state: IState, value: string) {
        state.token = value;
        localStorage.setItem('token', value);
    },
};
