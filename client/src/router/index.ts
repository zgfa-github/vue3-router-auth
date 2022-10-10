import {
    createRouter,
    RouteRecordRaw,
    createWebHistory,
    createWebHashHistory,
} from 'vue-router';
import Home from '@/views/Home.vue';
/**RouteRecordRaw 路由对象类型
 * 如下是静态路由
 */
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/index',
        name: 'Layout',
        component: () => import('@/layout/index.vue'),
        children: [
            {
                path: '/index',
                name: 'Home',
                component: Home,
                meta: {
                    icon: 'Edit',
                },
            },
        ],
    },

    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
        meta: {
            icon: 'Edit',
        },
    },
    {
        path: '/:pathMatch(.*)',
        name: 'NotFound',
        component: () =>
            import(/* webpackChunkName: "notFound"*/ '@/views/NotFound.vue'),
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
