<template>
    <el-aside :width="isCollapse ? '64px' : '211px'">
        <el-button @click="toggleCollasp">111</el-button>
        <el-menu
            :router="true"
            active-text-color="#ffd14b"
            background-color="#999"
            text-color="#fff"
            class="el-menu-vertical-demo sliderHeight"
            :default-active="currentPath"
            unique-opened
            :collapse="isCollapse"
            :collapse-transition="false"
            @open="handleOpen"
            @close="handleClose"
        >
            <div v-if="store.state.routeTree.length > 1">
                <template
                    v-for="(item, index) in store.state.routeTree"
                    :key="index"
                >
                    <MenuPlusItem :item="item" />
                </template>
            </div>

            <el-menu-item v-else :index="baseRoute[1].path"
                ><el-icon :size="21">
                    <component
                        :is="baseRoute[1].meta.icon"
                    ></component></el-icon
                >{{ baseRoute[1].name }}
            </el-menu-item>
            <!-- <MenuPlusItem :item="baseRoute[1]" /> -->
        </el-menu>
    </el-aside>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useStore } from 'vuex';
let currentPath = ref<any>('/');
const store = useStore();
console.log('store1111');
console.log(store.state.routeTree);

const baseRoute = useRouter().getRoutes();
console.log('获取路由信息~~~~~~处理没有权限的路由');
console.log(baseRoute);

const route = useRoute();

const isCollapse = ref(false);
const toggleCollasp = () => {
    console.log(1111);

    isCollapse.value = !isCollapse.value;
};
currentPath = computed(() => route.path);
const handleOpen = (key: any, keyPath: any) => {
    // console.log(key, keyPath)
};

const handleClose = (key: any, keyPath: any) => {
    // console.log(key, keyPath)
};
</script>

<style lang="" scoped></style>
