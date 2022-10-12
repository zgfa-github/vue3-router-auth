import { MockMethod } from 'vite-plugin-mock';
import {
    resultSuccess,
    resultError,
    getRequestToken,
    requestParams,
} from '../_utils';
export const englishArr: any = [
    {
        index: 1,
        world: 'chinese',
        chinese: '中国',
    },
    {
        index: 2,
        world: 'english',
        chinese: '英国',
    },
    {
        index: 3,
        world: 'banana',
        chinese: '香蕉',
    },
    {
        index: 4,
        world: 'bus',
        chinese: '公共汽车',
    },
    {
        index: 5,
        world: 'car',
        chinese: '小汽车',
    },
    {
        index: 6,
        world: 'egg',
        chinese: '鸡蛋',
    },
];
export default [
    {
        url: '/mock/api/getEnglishList',
        timeout: 3000,
        method: 'post',
        response: ({ body }) => {
            let info = body.params.info;
            let newArr: any = [];
            console.log('参数');

            console.log(info.searchKey);
            if (!info.pageNum) {
                info.pageNum = 1;
            }
            if (englishArr.length > 0) {
                let pageNum = (info.pageNum - 1) * info.pageSize;
                console.log(pageNum + '--' + info.pageSize);
                //计算截取的数组长度，如果用splice会导致原数组数据丢失
                let num = info.pageNum * info.pageSize;
                for (let i = pageNum; i < num; i++) {
                    //全部数据的数组长度不能为空
                    if (englishArr[i] != undefined) {
                        //查询条件为单词时直接将符合的数据添加到新数组内
                        if (
                            info.searchKey &&
                            !englishArr[i].world.indexOf(info.searchKey)
                        ) {
                            console.log('查询条件：' + info.searchKey);
                            newArr.push(englishArr[i]);
                        }

                        //查询条件为中文时将符合的数据添加到新数组内
                        if (
                            info.searchKey &&
                            !englishArr[i].chinese.indexOf(info.searchKey)
                        ) {
                            console.log('查询条件：' + info.searchKey);
                            newArr.push(englishArr[i]);
                        }

                        //查询条件为空时添加所有数据到新数组
                        if (!info.searchKey) {
                            console.log(i);
                            newArr.push(englishArr[i]);
                        }
                    }
                }
                console.log(newArr);
                // let page = {
                //     list: newArr,
                //     pageSize: 2,
                //     total: englishArr.length,
                // };
                // return page;
            }

            let page = {
                list: newArr,
                pageSize: 2,
                total: englishArr.length,
            };
            return resultSuccess({
                data: page,
            });
        },
    },
    {
        url: '/mock/api/addEnglish',
        timeout: 3000,
        method: 'post',
        response: ({ body }) => {
            let index = body.params.index;
            console.log(index);
            //Math.floor(Math.random()*(max-min+1))
            if (index == null) {
                let randomId = Math.floor(Math.random() * (100 - 1 + 1));
                englishArr.push({
                    index: randomId,
                    world: body.params.world,
                    chinese: body.params.chinese,
                });
            } else {
                for (let i = 0; i < englishArr.length; i++) {
                    if (englishArr[i].index == body.params.index) {
                        // englishArr.splice(i, 1);
                        // englishArr.push(body.params);
                        englishArr[i].world = body.params.world;
                        englishArr[i].chinese = body.params.chinese;
                    }
                }
            }
            console.log(englishArr);
            let page = {
                list: englishArr,
                code: 0,
            };
            return resultSuccess({
                data: page,
            });
        },
    },
    {
        url: '/mock/api/deleteEnglish',
        timeout: 3000,
        method: 'post',
        response: ({ body }) => {
            let english = body.params.english;
            console.log(english);

            for (let i = 0; i < englishArr.length; i++) {
                if (englishArr[i].index == english) {
                    englishArr.splice(i, 1);
                }
            }

            return resultSuccess(0);
        },
    },
] as MockMethod[];
