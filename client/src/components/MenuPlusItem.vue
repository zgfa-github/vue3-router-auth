<template>
    <el-menu :default-openeds="['1', '3']">
        <el-sub-menu index="1" v-if="item.children && item.children.length > 0">
            <template #title>
                <el-icon :size="20"> <Edit /> </el-icon>{{ item.title }}
            </template>
            <el-menu-item-group v-for="(child, index) in item.children">
                <!-- <template #title><el-icon><message /></el-icon>Group 1</template> -->
                <el-sub-menu v-if="child.children && child.children.length > 0">
                    <template #title>
                        {{ child.title }}
                    </template>
                    <el-menu-item-group
                        v-for="(_child, index) in child.children"
                    >
                        <el-menu-item index="1-1">
                            <router-link :to="`${_child.path}`">{{
                                _child.title
                            }}</router-link></el-menu-item
                        >
                    </el-menu-item-group>
                </el-sub-menu>
                <el-menu-item v-else>
                    <template #title>
                        <router-link :to="`${child.path}`">{{
                            child.title
                        }}</router-link>
                    </template>
                </el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item v-else>
            <template #title>
                <el-icon><message /></el-icon>{{ item.name }}
            </template>
        </el-menu-item>
    </el-menu>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
const props = defineProps({
    item: {
        type: Object,
        default: () => ({}),
    },
});
console.log(props);
</script>

<style></style>
