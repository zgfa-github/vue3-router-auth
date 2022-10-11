import { MockMethod } from 'vite-plugin-mock';
import {
    resultSuccess,
    resultError,
    getRequestToken,
    requestParams,
} from '../_utils';
interface IOrderDetails {
    name: string;
    num: number;
    sales: number;
    size: string;
    address: string;
}
export const item = {
    name: 'Tom',
    num: 199,
    sales: 33,
    address: 'No. 189, Grove St, Los Angeles',
};
export const th: { name: string; label: string }[] = [
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
        name: 'size',
        label: '规格',
    },

    {
        name: 'address',
        label: '地址',
    },
];

let myDate = new Date();
let year = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
let month = myDate.getMonth() + 1; //获取当前月份(1-12)
let day = myDate.getDate(); //获取当前日(1-31)
//获取完整年月日
let newDay = year + '-' + month + '-' + day;

// let dateTime = new Date();
// let res = dateTime.setDate(dateTime.getDate() + 1);
// let date = new Date(res);
const tableData1: IOrderDetails[] = [];
for (let i = 0; i < 120; i++) {
    tableData1.push({
        name: 'Tom',
        num: i + 1,
        sales: 33 + i,
        size: '小',
        address: 'No. 189, Grove St, Los Angeles',
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
        url: '/mock/api/getDetailList',
        timeout: 3000,
        method: 'get',
        response: () => {
            return resultSuccess({
                total: list.length,
                data: [...list],
                th,
            });
        },
    },
] as MockMethod[];
