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

                <el-menu-item v-else :index="baseRoute[0].path"
                    ><el-icon :size="21">
                        <component
                            :is="baseRoute[0].meta.icon"
                        ></component></el-icon
                    >{{ baseRoute[0].name }}
                </el-menu-item>
                <!-- <MenuPlusItem :item="baseRoute[0].children[0]" /> -->
            </el-menu>
        </el-scrollbar>
    </el-aside>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useStore } from 'vuex';
const props = defineProps({
    isCollapse: {
        type: Boolean,
        required: true,
        default: () => false,
    },
});
let currentPath = ref<any>('/');
const store = useStore();
console.log(`token值是：${store.state.token}~~~~`);

const baseRoute = useRouter().getRoutes();
console.log('获取路由信息~~~~~~处理没有权限的路由，基本静态路由');
console.log(baseRoute);

const route = useRoute();

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
