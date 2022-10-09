<template>
    <div>
        <h4>课程数据</h4>
    </div>

    <el-table :data="tableData">
        <el-table-column prop="date" label="Date" width="140" />
        <el-table-column prop="name" label="Name" width="120" />
        <el-table-column prop="num" label="num" width="120" />
        <el-table-column prop="sales" label="sales" width="120" />
        <el-table-column prop="fabu" label="fabu" width="120" />
        <el-table-column prop="address" label="Address" />
    </el-table>

    <el-pagination background layout="prev, pager, next" :total="1000" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const item = {
    date: '2016-05-02',
    name: 'Tom',
    num: 199,
    sales: 33,
    fabu: new Date().getTime(),
    address: 'No. 189, Grove St, Los Angeles',
};
const tableData = ref(Array.from({ length: 20 }).fill(item));
</script>

<style></style>
