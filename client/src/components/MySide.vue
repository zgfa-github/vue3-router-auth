<template>
    <div class="sider">
        <ul>
            <li><router-link to="/">首页</router-link></li>
        </ul>
        <template v-for="(item, index) in store.state.routeTree" :key="index">
           <MenuItem :item="item" />
        </template>
    </div>
</template>

<script setup lang="ts">
import MenuItem from './MenuItem.vue'
import { useStore } from 'vuex';
const store = useStore()
</script>

<style>
.sider {
    position: fixed;
    left: 0;
    top: 50px;
    width: 250px;
    height: 100%;
    padding: 40px 20px 40px 20px;
    box-sizing: border-box;
    background: green;
}
</style>