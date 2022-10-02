import { IRouter, IState } from "@/types";
import { SET_AUTH, SET_ROUTE_TREE } from "./actionTypes";

export default {
    [SET_ROUTE_TREE](state: IState, routeTree: IRouter[]) { 
        state.routeTree = routeTree;

    },
    [SET_AUTH](state: IState, auth: boolean) { 
        state.hasAuth = auth;
    }
}