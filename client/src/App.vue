<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
import { onMounted } from 'vue'
import axios from 'axios';
import qs from 'qs'
import { useRouter } from 'vue-router'
import { getRouterAuth } from './services/getRouterAuth'
import MyHeader from './components/MyHeader.vue';
import MySide from './components/MySide.vue';
import MyFooter from './components/MyFooter.vue';
import MyMain from './components/MyMain.vue';
//console.log(getRouterAuth);
onMounted(async () => {
  // console.log('开始');
  // let res = await getRouterAuth({uid: 1})
  // console.log(res);
  const res = useRouter().getRoutes()
console.log('zaiAPP获取路由信息');
console.log(res);


})

// axios.post('api/getRouterAuth', qs.stringify({
//   uid: 3
// })).then(res => { 
//   console.log(res);
// })

</script>

<template>
<my-header></my-header>
<my-side></my-side>
<my-main></my-main>
<my-footer></my-footer>
</template>

<style >
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
