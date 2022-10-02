<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
import { onMounted } from 'vue'
import axios from 'axios';
import qs from 'qs'
import { getRouterAuth } from './services/getRouterAuth'
console.log(getRouterAuth);
onMounted(async () => {
  console.log('开始');
  let res = await getRouterAuth({uid: 2})
  console.log(res);

})

// axios.post('api/getRouterAuth', qs.stringify({
//   uid: 3
// })).then(res => { 
//   console.log(res);
  
// })
</script>

<template>
<h1>HelloWorld88</h1>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
