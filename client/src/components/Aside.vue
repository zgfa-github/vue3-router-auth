<template>
    <el-aside
        :width="isCollapse ? '48px' : '210px'"
        :class="{ active: isCollapse }"
        ><el-scrollbar>
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

                <el-menu-item
                    v-else
                    v-for="item in staticRoutes.routes"
                    :index="item.path"
                    ><el-icon :size="20">
                        <component :is="item.meta.icon"></component></el-icon
                    >{{ item.name }}
                </el-menu-item>
                <!-- <MenuPlusItem :item="baseRoute[0].children[0]" /> -->
            </el-menu>
        </el-scrollbar>
    </el-aside>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue';
import { useRouter, useRoute, RouteRecordRaw } from 'vue-router';
import { useStore } from 'vuex';
interface ICollapse {
    isCollapse: boolean;
}
/** typescript
 * 写法1
 */
const props = withDefaults(defineProps<ICollapse>(), {
    isCollapse: false,
});
/** vue2中子组件接受参数
 * 写法2
 */
// const props = defineProps({
//     isCollapse: {
//         type: Boolean,
//         required: true,
//         default: () => false,
//     },
// });
let currentPath = ref<any>('/');
let staticRoutes = reactive({
    routes: [] as RouteRecordRaw[],
});
const store = useStore();
console.log(`token值是：${store.state.token}~~~~`);

const route = useRoute();
console.log('当前页面的路由');
console.log(route);

const baseRoute = useRouter().getRoutes();
console.log('获取路由信息~~~~~~（处理没有权限的路由，基本是静态路由）');
console.log(baseRoute);

const filterRoutes = baseRoute.filter((item) => item.name === 'Layout');
console.log(filterRoutes);
staticRoutes.routes = filterRoutes[0].children;

currentPath = computed(() => route.path);
const handleOpen = (key: any, keyPath: any) => {
    // console.log(key, keyPath)
};

const handleClose = (key: any, keyPath: any) => {
    // console.log(key, keyPath)
};
</script>

<style lang="less" scoped>
.el-aside {
}
.el-aside.active {
    overflow-x: hidden;
}
</style>
