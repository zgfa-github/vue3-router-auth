<template>
    <el-table :data="tableData1">
        <el-table-column
            v-for="t in tableData.th"
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
    <el-pagination
        background
        layout="prev, pager, next"
        :total="tableData.total"
        :page-size="10"
        @current-change="CurrentChange"
        @prev-click="PrevClick"
        @next-click="NextClick"
    />
    <!-- <div>{{ tableData1 }}</div> -->
</template>
<script setup lang="ts">
import { onMounted, reactive, ref, computed, watch, toRefs, toRaw } from 'vue';
interface ICourse {
    date: string;
    name: string;
    num: number;
    sales: number;
    fabu: number;
    address: string;
    shangjia: string;
    operate: string;
}
let pageNum = ref(0);
let pageSize = ref(10);
let num = 10;
let list: ICourse[] = reactive([]);
const props = defineProps({
    tableData: {
        type: Object,
        required: true,
        default: () => {},
    },

    // th: {
    //     type: Array<{ name: string; label: string }>,
    //     required: true,
    //     default: () => [],
    // },
    // total: {
    //     type: Number,
    //     required: true,
    //     default: () => 0,
    // },
});
console.log('子');
console.log(props);

// const { tableData } = toRefs(props);
// const { } = toRefs(props)
/**defineEmits 父子之间触发监听事件写法
 * 这是typescript写法
 * 通过子组件触发，传参过去，父组件接受参数修改
 */
// const emit = defineEmits<{
//     (e: 'CurrentHander', currentNum: number): void;
//     (e: 'changeCancle', bool: boolean): void;
//     (e: 'update', value: string): void;
// }>();
watch(
    props,
    (oldvalue, newvalue) => {
        console.log('watch');
        console.log(oldvalue);
        console.log(newvalue); //newvalue就是父组件传过来的数据
        //写你想操作的代码
        // newvalue.tableData.data.slice(pageNum.value, pageSize.value);
        list = newvalue.tableData.data;
        // console.log(list);
    },
    { deep: true },
);
const PrevClick = () => {
    console.log(111);
};
const NextClick = () => {
    console.log(222);
};
const CurrentChange = (currentPageNum: number) => {
    //console.log(currentPageNum);
    //emit('CurrentHander', currentPageNum);
    pageNum.value = (currentPageNum - 1) * num;
    pageSize.value = currentPageNum * num;
};
// const a = toRaw(props.tableData);
console.log(list);

const tableData1 = computed(() => {
    console.log(0);

    return props.tableData.data.slice(pageNum.value, pageSize.value);
    // Object.prototype.toString.call(props.tableData.data) ===
    // '[object Array]'
});
</script>
