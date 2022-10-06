import { Commit } from "vuex";
import { SET_AUTH, SET_ROUTE_TREE } from "./actionTypes";
import {IRouter, IState } from '@/types'
import { getRouterAuth } from "@/services/getRouterAuth";
import { formatRouteTree } from '@/utils'
//console.log(formatRouteTree);

export default {
    async [SET_ROUTE_TREE]({ commit, state }: { commit: Commit, state: IState }) {
        // console.log(state);
        
        // console.log(typeof state.uid);
        /**
         * 获取后台返回的数据
         */
        const routeList = await getRouterAuth({ uid: state.uid }) as unknown as IRouter[]
        console.log(routeList);
        /**
         * 格式化为树状结构
         */
        const routeTree = formatRouteTree(routeList)
        console.log(routeTree)
        commit(SET_ROUTE_TREE, routeTree);
        commit(SET_AUTH, true);
     }
}