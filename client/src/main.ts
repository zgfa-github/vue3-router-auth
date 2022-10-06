import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import store from './store';
import router from './router';
import { routerBeforeEach } from './router/route';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
//console.log(store);
// store.dispatch('SET_ROUTE_TREE').then(() => {
//     const routes = generateRouter(store.state.routeTree)
//     console.log(routes);

// })
//console.log(router);
routerBeforeEach(router, store);

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
app.use(store).use(router).use(ElementPlus).mount('#app');
