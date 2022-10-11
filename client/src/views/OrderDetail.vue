<template>
    <main-title>
        <template #title>订单详情</template>
    </main-title>
    <!--:th="thList.th" :total="total" -->
    <Paging :tableData="orderDList.list" />
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, computed } from 'vue';
import MainTitle from '../components/MainTitle.vue';
import Table from '@/components/Table.vue';
import Paging from '@/components/Paging.vue';
import { getDetailList } from '@/services';
import { IProps } from '@/types';
let thList = reactive({
    th: [],
});
let orderDList = reactive({
    list: {} as IProps,
});
let total = ref(0);
// let pageNum = ref(0);
// let pageSize = ref(10);
// let num = 10;

onMounted(async () => {
    console.log('onMounted开始');
    let res = await getDetailList();
    orderDList.list = res;
    console.log(res);

    console.log('onMounted结束');

    // const res = await getDetailList();
    // console.log(res);
    // orderDList.list = res.data;
    // total.value = res.total;
    // thList.th = res.th;
});
// const tableData = computed(() => {
//     return orderDList.list.slice(pageNum.value, pageSize.value);
// });

// @CurrentHander="pagingClick"
// const pagingClick = (currentPageNum: number) => {
//     pageNum.value = (currentPageNum - 1) * num;
//     pageSize.value = currentPageNum * num;
// };
</script>

<style></style>
