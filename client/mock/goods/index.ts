import { MockMethod } from 'vite-plugin-mock';
//id:商品id
//name:商品名字
//brand:品牌
//thumb:封面图
//category_id:分类id
//state:商品状态
//imgs:商品轮播图
//imgsLength:商品轮播图的个数
//skusRaw:该商品目前拥有的规格sku
//currentSku:默认的商品sku
export let goodsList = [
    {
        id: 35,
        name: '华为智慧屏 SE 65英寸 畅连通话版 超薄电视 4K超高清智能液晶电视机 HD65DESY 2+16GB 【搭载HarmonyOS 2】  ',
        brand: '华为',
        thumb: '2021/11/10/1639137174811华为1.dpg',
        category_id: 38,
        state: 1,
        imgs: [
            {
                id: 8,
                url: '2021/11/10/1639137289124华为1-1.dpg.webp',
                goods_id: 35,
            },
            {
                id: 9,
                url: '2021/11/10/1639137294323华为1-2.dpg.webp',
                goods_id: 35,
            },
            {
                id: 10,
                url: '2021/11/10/1639137299589华为1-3.dpg.webp',
                goods_id: 35,
            },
            {
                id: 11,
                url: '2021/11/10/1639137306225华为1-4.dpg.webp',
                goods_id: 35,
            },
            {
                id: 12,
                url: '2021/11/10/1639137312438华为1-5.dpg.webp',
                goods_id: 35,
            },
        ],
        imgsLength: 5,
        skusRaw: [
            {
                id: 27,
                price: 329900,
                stock: 111,
                marketPrice: 299900,
                costPrice: 200000,
                specs: {
                    颜色: '红色',
                    运行内存: '4G',
                    存储: '64G',
                },
                goods_id: 35,
            },
            {
                id: 28,
                price: 259900,
                stock: 222,
                marketPrice: 199900,
                costPrice: 149900,
                specs: {
                    颜色: '金色',
                    运行内存: '6G',
                    存储: '128G',
                },
                goods_id: 35,
            },
            {
                id: 29,
                price: 269900,
                stock: 333,
                marketPrice: 189900,
                costPrice: 129900,
                specs: {
                    颜色: '褐色',
                    运行内存: '4G',
                    存储: '256G',
                },
                goods_id: 35,
            },
            {
                id: 30,
                price: 289500,
                stock: 4444,
                marketPrice: 179900,
                costPrice: 149900,
                specs: {
                    颜色: '黑色',
                    运行内存: '4G',
                    存储: '128G',
                },
                goods_id: 35,
            },
            {
                id: 31,
                price: 312600,
                stock: 555,
                marketPrice: 159900,
                costPrice: 148500,
                specs: {
                    颜色: '白色',
                    运行内存: '4G',
                    存储: '64G',
                },
                goods_id: 35,
            },
            {
                id: 32,
                price: 245600,
                stock: 666,
                marketPrice: 195600,
                costPrice: 111100,
                specs: {
                    颜色: '红色',
                    运行内存: '6G',
                    存储: '128G',
                },
                goods_id: 35,
            },
            {
                id: 33,
                price: 327800,
                stock: 777,
                marketPrice: 169800,
                costPrice: 145800,
                specs: {
                    颜色: '金色',
                    运行内存: '8G',
                    存储: '64G',
                },
                goods_id: 35,
            },
            {
                id: 34,
                price: 369900,
                stock: 888,
                marketPrice: 219900,
                costPrice: 129900,
                specs: {
                    颜色: '褐色',
                    运行内存: '8G',
                    存储: '256G',
                },
                goods_id: 35,
            },
            {
                id: 35,
                price: 378400,
                stock: 999,
                marketPrice: 184500,
                costPrice: 112200,
                specs: {
                    颜色: '白色',
                    运行内存: '8G',
                    存储: '256G',
                },
                goods_id: 35,
            },
            {
                id: 36,
                price: 358900,
                stock: 1010,
                marketPrice: 190000,
                costPrice: 150000,
                specs: {
                    颜色: '黑色',
                    运行内存: '4G',
                    存储: '64G',
                },
                goods_id: 35,
            },
        ],
        currentSku: {
            id: 27,
            price: 329900,
            stock: 111,
            marketPrice: 299900,
            costPrice: 200000,
            specs: {
                颜色: '红色',
                运行内存: '4G',
                存储: '64G',
            },
            goods_id: 35,
        },
    },
];
import {
    resultSuccess,
    resultError,
    getRequestToken,
    requestParams,
} from '../_utils';
export default [
    {
        url: '/mock/api/getGoodsList',
        timeout: 3000,
        method: 'get',
        response: () => {
            //data替代resultSuccess里面的默认参数result,所以返回前端是 .data获取数据
            return resultSuccess({
                data: goodsList,
            });
        },
    },
] as MockMethod[];
