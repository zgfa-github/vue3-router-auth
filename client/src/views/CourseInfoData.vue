<template>
    <main-title>
        <template #title>课程操作</template>
    </main-title>
    <Paging :tableData="courseInfo.info" />
</template>

<script setup lang="ts">
import MainTitle from '@/components/MainTitle.vue';
import Table from '@/components/Table.vue';
import Paging from '@/components/Paging.vue';
import { getCourseList } from '@/services';
import { ref, onMounted, reactive, computed } from 'vue';
import { useStore } from 'vuex';
import store from '@/store';
let thList = reactive({
    th: [],
});
let courseList = reactive({
    list: [],
});
let total = ref(0);
let courseInfo = reactive({
    info: {},
});
// let pageNum = ref(0);
// let pageSize = ref(10);
// let num = 10;
const test = async () => {
    const res = await getCourseList();
    courseInfo.info = res;
};
test();
onMounted(async () => {
    //console.log(await getCourseList());
    //const res = await getCourseList();
    //courseList.list = res.data;
    // console.log(courseInfo);
    //courseInfo.info = res;
    // console.log('返回数据');
    // console.log(
    //     Object.prototype.toString.call(courseList.list) === '[object Array]',
    // );
    //console.log(res);
    // total.value = res.total;
    // thList.th = res.th;
    // let tableData = courseList.list.splice(0, 10);
    // console.log(tableData);
    //await store.dispatch('GET_COURSE_LIST');
});
/**
 *  区分 splice 和 slice，如果这里用splice就错了
 * splice返回新数组改变原数组
 * slice 返回新数组不改变原数组
 */
// const tableData = computed(() => {
//     return courseList.list.slice(pageNum.value, pageSize.value);
// });

//@CurrentHander="pagingClick"
// const pagingClick = (currentPageNum: number) => {
//     pageNum.value = (currentPageNum - 1) * num;
//     pageSize.value = currentPageNum * num;
// };
</script>

<style></style>
