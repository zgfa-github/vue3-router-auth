<template>
    <el-table :data="tableDataComputed">
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
    <!-- <div>{{ tableDataComputed }}</div> -->
</template>
<script setup lang="ts">
import {
    onMounted,
    reactive,
    ref,
    computed,
    watch,
    watchEffect,
    toRefs,
    toRaw,
    PropType,
} from 'vue';
import { IOrderDetails } from '../types';

interface IProps {
    tableData: {
        data: IOrderDetails[];
        th: { name: string; label: string }[];
        total: number;
    };
}
let pageNum = ref(0);
let pageSize = ref(10);
let num = 10;
let list: { name: string; label: string }[] = reactive([]);
const props = withDefaults(defineProps<IProps>(), {
    // tableData: {
    //     type: Array as PropType<IProps[]>,
    //     default: () => {},
    // },
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
console.log('子组件接收父组件参数props');
console.log(props);
console.log(props.tableData.th);

console.log(JSON.parse(JSON.stringify(props)));

// const tableData = toRefs(props);
// console.log(tableData);

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
watchEffect(() => {
    console.log('首次以及props改变才会执行这里的代码,可监听父组件的传值');
    console.log(props);
    // list = props;
    // console.log(list);
});
watch(
    () => props,
    (oldvalue, newvalue) => {
        console.log('watch');
        console.log(oldvalue.tableData);
        console.log(newvalue.tableData); //newvalue就是父组件传过来的数据
        //写你想操作的代码
        // newvalue.data.slice(pageNum.value, pageSize.value);
        //list = newvalue.data;
        // console.log(list);
        //newvalue.data.slice(pageNum.value, pageSize.value);
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
// const a = toRaw(props);
console.log('3333333333');
console.log(props.tableData.data);

const tableDataComputed = computed(() => {
    console.log('computed~~~~~~~~~~~~~~');
    console.log(JSON.parse(JSON.stringify(props)));
    /*记住第一次父组件传递过来的参数为[],所以才加下面这个判断
     * 父组件onMouted执行请求后端数据后，传递过来的参数有值了
     *JSON.parse(JSON.stringify()) 转化为json对象也很关键
     JSON.parse(JSON.stringify(props)) &&
        Object.prototype.toString.call(props) === '[object Object]'

     */
    //console.log(Object.keys(props));
    //console.log(Object.keys(props).length);
    //console.log(JSON.parse(JSON.stringify(props.tableData)));

    //console.log(Object.prototype.toString.call(props));

    if (
        props.tableData.data &&
        Object.prototype.toString.call(props) === '[object Object]'
    ) {
        console.log(JSON.parse(JSON.stringify(props.tableData)));

        return JSON.parse(JSON.stringify(props.tableData.data)).slice(
            pageNum.value,
            pageSize.value,
        );
    } else {
        console.log(111);
        return [];
    }

    // Object.prototype.toString.call(props.tableData.data) ==='[object Array]'
});
</script>
