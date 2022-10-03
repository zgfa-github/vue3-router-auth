import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
import router from './router'
import { routerBeforeEach } from './router/route'
import { useRouter } from 'vue-router'
//console.log(store);
// store.dispatch('SET_ROUTE_TREE').then(() => { 
//     const routes = generateRouter(store.state.routeTree)
//     console.log(routes);
    
// })
routerBeforeEach(router, store)
console.log(router);

//const app = createApp(App)
createApp(App).use(store).use(router).mount('#app')
