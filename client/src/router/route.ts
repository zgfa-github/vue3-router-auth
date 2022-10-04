import { SET_ROUTE_TREE } from './../store/actionTypes';
import store from '@/store';
import { Router, RouteRecordRaw } from 'vue-router';
import { Store } from 'vuex';
import { IRouter, IState } from './../types/index.d';
/**
 * 
 * @param routeTree 
 * @returns 
 */
export function generateRouter(routeTree: IRouter[]) { 
    let newRoutes = routeTree.map(route => { 
        let _route: RouteRecordRaw = {
            path: route.path,
            name: route.name,
            //注意里面的双引号，空格这些`/* webpackChunkName: "${route.name}" */@/views/${route.name}.vue`
            component: () => import(`/* webpackChunkName: "${route.name}"*/@/views/${route.name}.vue`),
            children: [],
        }
        if (route.children) {
            _route.children = generateRouter(route.children)

        }
        return _route;
    })
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
            //const currentRoutes = router.options.routes;
            const newRoutes = generateRouter(store.state.routeTree);
            console.log(newRoutes);
            // newRoutes.forEach((item) => { 
            //     const has = currentRoutes.some(it => it.path === item.path)
            //     if (!has) { 
            //         currentRoutes.concat(item)
            //     }
            // })
            //动态添加路由
            newRoutes.forEach(route => router.addRoute(route))
            console.log(router);
            
            next({ path: to.path })
        } else { 
            next();
        }
        
     })
}