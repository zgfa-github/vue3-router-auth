<template>
    <!-- <my-header></my-header>
  <my-side></my-side>
  <my-main></my-main>
  <my-footer></my-footer> -->
    <el-container class="layout-container-demo" style="height: 500px">
        <el-header>Header</el-header>
        <el-container>
            <el-aside width="200px">
                <el-scrollbar>
                    <template v-if="store.state.routeTree.length > 0">
                        <MenuPlusItem
                            :item="item"
                            v-for="(item, index) in store.state.routeTree"
                            :key="index"
                        />
                    </template>
                    <template v-else>
                        <MenuPlusItem :item="res[0]" />
                    </template>
                </el-scrollbar>
            </el-aside>
            <el-container>
                <el-main>
                    <el-scrollbar>
                        <router-view></router-view>
                    </el-scrollbar>
                </el-main>
                <el-footer></el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios';
import qs from 'qs';
import { useRouter } from 'vue-router';
import { getRouterAuth } from './services/getRouterAuth';
import MyHeader from './components/MyHeader.vue';
import MySide from './components/MySide.vue';
import MyFooter from './components/MyFooter.vue';
import MyMain from './components/MyMain.vue';
import { ref, onMounted } from 'vue';
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue';
import MenuPlusItem from './components/MenuPlusItem.vue';
import MenuItem from './components/MenuItem.vue';
import { useStore } from 'vuex';
const res = useRouter().getRoutes();
console.log('zaiAPP获取路由信息');
console.log(res);
onMounted(async () => {
    // console.log('开始');
    // let res2 = await getRouterAuth({uid: 1})
    // console.log(res2);
});

// axios.post('api/getRouterAuth', qs.stringify({
//   uid: 3
// })).then(res => {
//   console.log(res);
// })

const store = useStore();
//console.log(store.state.routeTree);
</script>

<style>
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
.layout-container-demo .el-header {
    position: relative;
    background-color: var(--el-color-primary-light-7);
    color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
    color: var(--el-text-color-primary);
    background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
    border-right: none;
}
.layout-container-demo .el-main {
    padding: 0;
}
.layout-container-demo .toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 20px;
}
</style>
