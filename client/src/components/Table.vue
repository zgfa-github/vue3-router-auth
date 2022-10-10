<template>
    <el-table :data="tableData">
        <el-table-column
            v-for="t in th"
            :prop="t.name"
            :label="t.label"
            width="140"
        />
        <!-- <el-table-column prop="name" label="名称" width="120" />
        <el-table-column prop="num" label="数量" width="120" />
        <el-table-column prop="sales" label="销售额" width="120" />
        <el-table-column prop="fabu" label="发布" width="120" />
        <el-table-column prop="address" label="地址" />
        <el-table-column prop="shangjia" label="上架" />
        <el-table-column prop="operate" label="操作" /> -->
    </el-table>
</template>

<script setup lang="ts">
const props = defineProps({
    tableData: {
        type: Array,
        required: true,
        default: () => [],
    },
    th: {
        type: Array<{ name: string; label: string }>,
        required: true,
        default: () => [],
    },
});
console.log(props);
</script>

<style lang="" scoped></style>
