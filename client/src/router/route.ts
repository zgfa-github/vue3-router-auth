import { SET_ROUTE_TREE } from './../store/actionTypes';
import store from '@/store';
import { Router, RouteRecordRaw, useRouter } from 'vue-router';
import { Store } from 'vuex';
import { IRouter, IState } from './../types/index.d';
import router from './index';
// console.log(router);

/**
 *
 * @param routeTree
 * @returns
 */
export function generateRouter(routeTree: IRouter[]) {
    let newRoutes = routeTree.map((route) => {
        let _route: RouteRecordRaw = {
            path: route.path,
            name: route.name,
            component: () =>
                import(
                    `/* webpackChunkName: "${route.name}"*/@/views/${route.name}.vue`
                ),
            children: [],
        };
        /**
         * 动态添加路由，官网有介绍，两个参数
         */
        router.addRoute('Layout', _route);
        /**
         * 有关路由嵌套
         * 父路由不给name属性（官网有说明）
         * 子路由才给name属性
         * 此方法虽然可以解决问题，但是代码凌乱，不是我想要的结果
         */
        // let _route: RouteRecordRaw = {
        //     path: '/',
        //     component: () => import('@/components/layout/Layout.vue'),
        //     children: [
        //         {
        //             path: route.path,
        //             name: route.name,
        //             //注意里面的双引号，空格这些`/* webpackChunkName: "${route.name}" */@/views/${route.name}.vue`
        //             component: () =>
        //                 import(
        //                     `/* webpackChunkName: "${route.name}"*/@/views/${route.name}.vue`
        //                 ),
        //             meta: {
        //                 icon: 'Edit',
        //             },
        //         },
        //     ],
        // };
        //debugger;
        if (route.children) {
            _route.children = generateRouter(route.children);
        }

        return _route;
    });
    console.log('生成路由递归~~~~~~');
    console.log(newRoutes);
    return newRoutes;
}

// export {
//     generateRouter
// }

export function routerBeforeEach(router: Router, store: Store<IState>) {
    console.log('routerBeforeEach');

    router.beforeEach(async (to, from, next) => {
        console.log('路由拦截');

        if (!store.state.hasAuth) {
            await store.dispatch(SET_ROUTE_TREE);
            const currentRoutes = router.options.routes;
            console.log(55555);
            console.log(currentRoutes);

            const accessRoutes = generateRouter(store.state.routeTree);
            console.log('返回,树结构转化为路由映射结构');
            console.log(accessRoutes);

            // accessRoutes.forEach((item) => {
            //     const has = currentRoutes.some((it) => it.path === item.path);
            //     if (!has) {
            //         currentRoutes[0].children?.push(item);
            //     }
            // });
            // if (
            //     currentRoutes[currentRoutes.length - 1].path != '/:catchAll(.*)'
            // ) {
            //     currentRoutes.concat({
            //         path: '/:pathMatch(.*)',
            //         redirect: '/404',
            //     });
            // }
            //动态添加路由,在生成路由映射的时候动态添加解决，请看上面代码
            // accessRoutes.forEach((asyncRoute) => {
            //     router.addRoute(asyncRoute);
            //     //router.options.routes[0].children?.push(route);
            // });

            console.log('动态添加路由后,获取所有路由');
            console.log(router.getRoutes());
            //next({...to, replace: true})
            next({ path: to.path });
        } else {
            console.log('next');

            next();
        }
    });
}
