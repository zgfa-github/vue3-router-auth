import { createRouter, RouteRecordRaw,createWebHistory,createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
/**RouteRecordRaw 路由对象类型
 * 静态路由
 */
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: Home
       
    },
    {
        path: '/:pathMatch(.*)',
        name: 'NotFound',
        component: () => import(/* webpackChunkName: "notFound"*/'@/views/NotFound.vue')
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;