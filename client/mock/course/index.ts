import { MockMethod } from 'vite-plugin-mock';
import {
    resultSuccess,
    resultError,
    getRequestToken,
    requestParams,
} from '../_utils';
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
export const item = {
    date: '2016-05-02',
    name: 'Tom',
    num: 199,
    sales: 33,
    fabu: new Date().getTime(),
    address: 'No. 189, Grove St, Los Angeles',
    shangjia: '已上架',
    operate: '编辑',
};
export const th: { name: string; label: string }[] = [
    {
        name: 'date',
        label: '日期',
    },
    {
        name: 'name',
        label: '名称',
    },
    {
        name: 'num',
        label: '数量',
    },
    {
        name: 'sales',
        label: '销售额',
    },
    {
        name: 'fabu',
        label: '发布',
    },
    {
        name: 'address',
        label: '地址',
    },
    {
        name: 'shangjia',
        label: '地址',
    },
    {
        name: 'address',
        label: '上架',
    },
    {
        name: 'operate',
        label: '操作',
    },
];

let myDate = new Date();
let year = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
let month = myDate.getMonth() + 1; //获取当前月份(1-12)
let day = myDate.getDate(); //获取当前日(1-31)
//获取完整年月日
let newDay = year + '-' + month + '-' + day;

let dateTime = new Date();
let res = dateTime.setDate(dateTime.getDate() + 1);
let date = new Date(res);
const tableData1: ICourse[] = [];
for (let i = 0; i < 110; i++) {
    tableData1.push({
        date: year + '-' + month + '-' + (day + 1 + i),
        name: 'Tom',
        num: i + 1,
        sales: 33 + i,
        fabu: new Date().getTime(),
        address: 'No. 189, Grove St, Los Angeles',
        shangjia: '已上架',
        operate: '编辑',
    });
}
//const tableData = Array.from({ length: 20 }).fill(item);
export function createCourseList() {
    return tableData1;
}
const list = createCourseList();
//console.log(list);

export default [
    {
        url: '/mock/api/getCourseList',
        timeout: 3000,
        method: 'get',
        response: () => {
            return resultSuccess({
                total: list.length,
                data: [...list],
                th,
                code: 200,
            });
        },
    },
] as MockMethod[];
