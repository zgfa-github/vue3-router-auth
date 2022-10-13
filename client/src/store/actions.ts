import { Commit } from 'vuex';
import {
    SET_AUTH,
    SET_ROUTE_TREE,
    SET_TOKEN,
    DEL_TOKEN,
    GET_COURSE_LIST,
} from './actionTypes';
import { IRouter, IState } from '@/types';
import { getRouterAuth, getCourseList } from '@/services';
import { formatRouteTree } from '@/utils';
//console.log(formatRouteTree);

export default {
    async [SET_ROUTE_TREE]({
        commit,
        state,
    }: {
        commit: Commit;
        state: IState;
    }) {
        // console.log(state);

        // console.log(typeof state.uid);
        /**
         * 获取后台返回的数据
         */
        const routeList = (await getRouterAuth({
            uid: state.uid,
        })) as unknown as IRouter[];
        console.log('actions后端接口返回数据');
        console.log(routeList);
        /**
         * 格式化为树状结构
         */
        const routeTree = formatRouteTree(routeList);
        console.log('把数据转为相关树结构');
        console.log(routeTree);
        console.log('=========================');
        commit(SET_ROUTE_TREE, routeTree);
        commit(SET_AUTH, true);
    },
    [SET_TOKEN](
        { commit, state }: { commit: Commit; state: IState },
        value: string,
    ) {
        console.log(state);
        console.log(value);

        commit(SET_TOKEN, value);
    },
    [DEL_TOKEN]() {
        localStorage.removeItem('token');
    },
    async [GET_COURSE_LIST]({
        commit,
        state,
    }: {
        commit: Commit;
        state: IState;
    }) {
        const res = await getCourseList();
        console.log(res);
        commit(GET_COURSE_LIST, res);
    },
};
