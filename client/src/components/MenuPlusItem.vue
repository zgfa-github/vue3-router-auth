<template>
    <el-sub-menu
        :index="item.path"
        v-if="item.children && item.children.length > 0"
    >
        <template #title>
            <el-icon :size="20">
                <!-- <Edit /> -->
                <component :is="item.meta.icon"></component>
            </el-icon>
            {{ item.title }}
        </template>
        <template v-for="innerItem in item.children">
            <!--递归，无限子菜单-->
            <MenuPlusItem :item="innerItem" />
        </template>
    </el-sub-menu>
    <el-menu-item v-else :index="item.path">
        <template #title>
            <!-- <div>{{ item.path }}</div> -->
            {{ item.title }}
        </template>
    </el-menu-item>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
//测试图标
const icon = ref('Edit');
const props = defineProps({
    item: {
        type: Object,
        required: true,
        default: () => ({}),
    },
});
// console.log(props.item);
</script>

<style></style>
