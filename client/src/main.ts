import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
console.log(store);
store.dispatch('SET_ROUTE_TREE')
//const app = createApp(App)
createApp(App).use(store).mount('#app')
