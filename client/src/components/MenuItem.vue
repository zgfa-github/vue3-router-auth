<template>
        <!--自己手写-->
        <ul v-if="item.children && item.children.length > 0">
            <li>
                <router-link :to="item.path || item.link">{{item.title}}</router-link>
                <template v-for="(child, index) in item.children">
                   <MenuItem :item="child" />
                </template>
            </li>
        </ul>
        <ul v-else>
            <li>
                <router-link :to="item.path || item.link">{{item.title}}</router-link>
            </li>
        </ul>
       
</template>

<script setup lang="ts">
const props = defineProps({
    item: {
        type: Object,
        default: () => ({})
    }
})
</script>

<style >

</style>