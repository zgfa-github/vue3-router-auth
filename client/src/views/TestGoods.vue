<template>
    <div class="container" id="app" v-cloak>
        <div>
            <el-form
                size="small"
                :model="itemInfo"
                :rules="rules"
                label-width="100px"
                class="demo-ruleForm"
            >
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>商品规格信息</span>
                    </div>
                    <el-collapse-transition>
                        <div v-show="unit_show" class="transition-box">
                            <el-row
                                :gutter="20"
                                v-for="(unit, key) in itemInfo.unitList"
                                :key="key"
                            >
                                <el-col :span="24">
                                    <div>
                                        <el-row>
                                            <el-col :span="24">
                                                <el-row>
                                                    <el-col :span="20">
                                                        <el-form-item
                                                            label="分类"
                                                            prop="coupon_flag"
                                                        >
                                                            <el-input
                                                                v-model="
                                                                    unit.unitDefId
                                                                "
                                                                @change="
                                                                    searchUnitDef
                                                                "
                                                                placeholder="请输入规格分类"
                                                            ></el-input>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :span="4">
                                                        <div>
                                                            <i
                                                                v-on:click="
                                                                    delUnitDef(
                                                                        key,
                                                                    )
                                                                "
                                                                class="el-icon-close"
                                                            ></i>
                                                        </div>
                                                    </el-col>
                                                </el-row>
                                            </el-col>
                                            <el-col :span="24">
                                                <el-form-item
                                                    label="规格"
                                                    prop="coupon_flag"
                                                >
                                                    <el-row :gutter="20">
                                                        <el-col
                                                            :span="5"
                                                            v-for="(
                                                                u, k
                                                            ) in unit.unit"
                                                            :key="k"
                                                        >
                                                            <el-input
                                                                v-if="
                                                                    unit.unit
                                                                        .length >
                                                                    0
                                                                "
                                                                v-model="
                                                                    unit.unit[k]
                                                                "
                                                                placeholder="请输入规格"
                                                                @change="
                                                                    unitSelect
                                                                "
                                                                clearable
                                                            ></el-input>
                                                        </el-col>
                                                        <el-col :span="4">
                                                            <!-- v-if="unit.unitDefId ? 'disabled' : ''" -->
                                                            <el-button
                                                                v-if="
                                                                    unit.unitDefId
                                                                        ? 'disabled'
                                                                        : ''
                                                                "
                                                                size="small"
                                                                v-on:click="
                                                                    addUnit(key)
                                                                "
                                                                >添加规格</el-button
                                                            >
                                                        </el-col>
                                                    </el-row>
                                                </el-form-item>
                                            </el-col>
                                        </el-row>
                                    </div>
                                </el-col>
                            </el-row>

                            <br />
                            <!--添加分类-->
                            <el-row>
                                <el-col :span="24">
                                    <div
                                        style="
                                            background: #e5e9f2;
                                            padding: 8px;
                                        "
                                    >
                                        <el-button
                                            size="small"
                                            v-show="unit_show"
                                            v-on:click="addUnitDef()"
                                            >添加分类</el-button
                                        >
                                    </div>
                                </el-col>
                            </el-row>
                            <!--批量-->
                            <el-row>
                                <el-col :span="24">
                                    <table class="table" v-if="true">
                                        <tr>
                                            <td
                                                colspan="
                                                    true
                                                "
                                            >
                                                批量设置
                                            </td>
                                            <td style="width: 100px">
                                                <el-input
                                                    v-model="pl.price"
                                                    size="small"
                                                ></el-input>
                                            </td>
                                            <td style="width: 100px">
                                                <el-input
                                                    v-model="pl.market_price"
                                                    size="small"
                                                ></el-input>
                                            </td>
                                            <td style="width: 100px">
                                                <el-input
                                                    v-model="pl.cost_price"
                                                    size="small"
                                                ></el-input>
                                            </td>
                                            <td style="width: 100px">
                                                <el-input
                                                    v-model="pl.stock"
                                                    size="small"
                                                ></el-input>
                                            </td>
                                            <td style="width: 100px">
                                                <el-input
                                                    v-model="pl.warning"
                                                    size="small"
                                                ></el-input>
                                            </td>
                                            <td style="width: 100px">
                                                <el-input
                                                    :disabled="true"
                                                    v-model="pl.img"
                                                    size="small"
                                                ></el-input>
                                            </td>
                                        </tr>
                                        <tr v-if="true">
                                            <th
                                                v-for="(
                                                    item, index
                                                ) in itemInfo.tableHeader"
                                                :key="index"
                                            >
                                                {{ item.join('') }}
                                            </th>
                                            <th>商品售价</th>
                                            <th>市场价</th>
                                            <th>成本价</th>
                                            <th>库存</th>
                                            <th>预警值</th>
                                        </tr>
                                        <tr
                                            v-for="(
                                                row, tableKey
                                            ) in itemInfo.table"
                                            :key="tableKey"
                                        >
                                            <td
                                                align="center"
                                                style="width: 100px"
                                                v-for="(item, index) in row"
                                                :key="index"
                                            >
                                                <el-form-item label-width="0">
                                                    {{ item }}
                                                </el-form-item>
                                            </td>
                                            <td style="width: 100px">
                                                <el-form-item
                                                    label-width="0"
                                                    :prop="
                                                        'unitStock.' +
                                                        tableKey +
                                                        '.price'
                                                    "
                                                    :rules="
                                                        rules.unitStock.price
                                                    "
                                                >
                                                    <el-input
                                                        size="small"
                                                        v-model.trim="
                                                            itemInfo.unitStock[
                                                                tableKey
                                                            ].price
                                                        "
                                                    ></el-input>
                                                </el-form-item>
                                            </td>
                                            <td style="width: 100px">
                                                <el-form-item
                                                    label-width="0"
                                                    :prop="
                                                        'unitStock.' +
                                                        tableKey +
                                                        '.market_price'
                                                    "
                                                    :rules="
                                                        rules.unitStock
                                                            .market_price
                                                    "
                                                >
                                                    <el-input
                                                        size="small"
                                                        v-model="
                                                            itemInfo.unitStock[
                                                                tableKey
                                                            ].market_price
                                                        "
                                                    ></el-input>
                                                </el-form-item>
                                            </td>
                                            <td style="width: 100px">
                                                <el-form-item
                                                    label-width="0"
                                                    :prop="
                                                        'unitStock.' +
                                                        tableKey +
                                                        '.cost_price'
                                                    "
                                                    :rules="
                                                        rules.unitStock
                                                            .cost_price
                                                    "
                                                >
                                                    <el-input
                                                        size="small"
                                                        v-model="
                                                            itemInfo.unitStock[
                                                                tableKey
                                                            ].cost_price
                                                        "
                                                    ></el-input>
                                                </el-form-item>
                                            </td>
                                            <td style="width: 100px">
                                                <el-form-item
                                                    label-width="0"
                                                    :prop="
                                                        'unitStock.' +
                                                        tableKey +
                                                        '.stock'
                                                    "
                                                    :rules="
                                                        rules.unitStock.stock
                                                    "
                                                >
                                                    <el-input
                                                        size="small"
                                                        v-model="
                                                            itemInfo.unitStock[
                                                                tableKey
                                                            ].stock
                                                        "
                                                    />
                                                </el-form-item>
                                            </td>
                                            <td>
                                                <el-form-item
                                                    label-width="0"
                                                    :prop="
                                                        'unitStock.' +
                                                        tableKey +
                                                        '.warning'
                                                    "
                                                    :rules="
                                                        rules.unitStock.warning
                                                    "
                                                >
                                                    <el-input
                                                        size="small"
                                                        v-model="
                                                            itemInfo.unitStock[
                                                                tableKey
                                                            ].warning
                                                        "
                                                    ></el-input>
                                                </el-form-item>
                                            </td>
                                            <td>
                                                <el-form-item
                                                    label-width="0"
                                                    :prop="
                                                        'unitStock.' +
                                                        tableKey +
                                                        '.img'
                                                    "
                                                    :rules="rules.unitStock.img"
                                                >
                                                    <el-upload
                                                        :data="{
                                                            uploadData:
                                                                tableKey,
                                                        }"
                                                        class="unit-uploader"
                                                        list-type="picture-card"
                                                        :limit="1"
                                                        :with-credentials="true"
                                                        :action="
                                                            uploadMainImgUrl
                                                        "
                                                        :show-file-list="false"
                                                        :before-upload="
                                                            beforeUnitUpload
                                                        "
                                                        v-model="
                                                            itemInfo.unitStock[
                                                                tableKey
                                                            ].img
                                                        "
                                                    >
                                                        <img
                                                            v-if="
                                                                imgMainUrlData
                                                            "
                                                            :src="
                                                                imgMainUrlData
                                                            "
                                                            class="unit"
                                                        />
                                                        <i
                                                            v-else
                                                            class="el-icon-plus unit-uploader-icon"
                                                        ></i>
                                                    </el-upload>
                                                </el-form-item>
                                            </td>
                                        </tr>
                                    </table>
                                </el-col>
                            </el-row>
                        </div>
                    </el-collapse-transition>
                    <el-button
                        class="mt20"
                        type="primary"
                        @click="submitForm('itemInfo')"
                        >确认规格11</el-button
                    >
                </el-card>
            </el-form>
        </div>
    </div>
</template>
​
<script setup lang="ts">
import { defineComponent, ref, reactive, watch } from 'vue';
import { sliceIntoChunks, spliceIntoChunks, doComb, comb } from '@/utils';
// import { shopAdminSpecGroup, shopAdminSpecValue } from '@/api/product';
const info_show = ref(false);
const unit_show = ref(true);
const inputVisible = ref(false);
const subFlag = ref(false);
const dialogImageUrl = ref('');
const inputValue = ref('');
const imgMainUrlData = ref('');

const uploadMainImgUrl = ref('');
const unitStock = reactive([]);
const unitDef = reactive([]);
let unitDefLimit = reactive([]);
let unitLimit = reactive([]);

const itemInfo = reactive({
    unitList: [
        // { unitDefId: '品牌', unitDef: '1111', unit: ['小米'] },
        // { unitDefId: '套餐', unitDef: '2222', unit: ['套餐1', '套餐2'] },
    ],
    unitStock: [
        // {
        //     price: '110',
        //     cost_price: '10',
        //     market_price: '100',
        //     stock: '100',
        //     warning: '9999',
        //     unit: [],
        // },
        // {
        //     price: '12',
        //     cost_price: '10',
        //     market_price: '11',
        //     stock: '99999',
        //     warning: '9999',
        //     unit: [],
        // },
        // {
        //     price: '13',
        //     cost_price: '10',
        //     market_price: '11',
        //     stock: '99999',
        //     warning: '9999',
        //     unit: [],
        // },
    ],
    table: [
        // ['小米', '套餐2', '绿色'],
        // ['小米', '套餐3', '黑色'],
        //['小米'],['苹果']
        // [['小米'], ['套餐1']],
        // [['小米'], ['套餐2']],
        // [['苹果'], ['套餐1']],
        // ['苹果', '套餐1'],
        // ['苹果', '套餐2'],
    ] as any[],
    tableHeader: [
        // ['品牌'], ['套餐'], ['颜色']
    ],
});

const pl = reactive({
    price: null,
    market_price: null,
    cost_price: null,
    stock: null,
    warning: null,
    img: '',
});
const rules = reactive({
    unitList: [],
    unitAll: [],
    table: [],
    tableHeader: [],
    unitStock: {
        price: [
            {
                required: true,
                message: '请输入商品售价',
                trigger: 'blur',
            },
        ],
        market_price: [
            {
                required: true,
                message: '请输入成本价',
                trigger: 'blur',
            },
        ],
        cost_price: [
            {
                required: true,
                message: '请输入市场价',
                trigger: 'blur',
            },
        ],
        stock: [
            {
                required: true,
                message: '请输入库存值',
                trigger: 'blur',
            },
        ],
        warning: [
            {
                required: true,
                message: '请输入预警值',
                trigger: 'blur',
            },
        ],
        img: [{ required: true, message: '请上传规格图片', trigger: 'blur' }],
    },
});
watch(
    itemInfo.unitList,
    (oldvalue, newvalue) => {
        console.log('watch监听');
        console.log(oldvalue);
        console.log(newvalue);
        let selectCategory = [];
        let res = JSON.parse(JSON.stringify(newvalue));
        console.log('JSON.parse');
        console.log(res);

        if (res.length > 0) {
            console.log('有数组长度了');
            let flag = true;
            res.forEach(function (value, index) {
                if (value.unit.length < 0) {
                    flag = false;
                }
                var undef = value['unitDefId'].split(':');
                console.log('分割成数组');
                console.log(undef);
                //value['unitDef'] = value['unitDefId'];

                // if (undef[0].length == 0 && value['unitDefId'] === '') {
                //     console.log('是否为空');
                //     itemInfo.tableHeader = [];
                //     //itemInfo.tableHeader.splice(index, 1);
                //     return;
                // }
                //修改头部大分类，功能还有bug，不够完善,有待完善
                itemInfo.tableHeader.forEach((item) => {
                    if (item) {
                        // alert(123);
                        itemInfo.tableHeader.splice(index, 1);
                        //console.log(itemInfo.tableHeader.splice(index, 1));
                    }
                });

                itemInfo.tableHeader.push(undef);
                console.log('th头部数组');
                console.log(JSON.parse(JSON.stringify(itemInfo.tableHeader)));

                let unit = [];
                value.unit.forEach(function (k) {
                    if (k == '') {
                        flag = false;
                    } else {
                        k = k.split(':');
                        console.log(k);

                        k.undef = undef[0];
                        unit.push(k);
                        console.log(unit);
                    }
                });
                if (unit) {
                    selectCategory.push(JSON.parse(JSON.stringify(unit)));
                    console.log('selectCategory');
                    console.log(selectCategory.length);
                    console.log(selectCategory);
                }
            });
            // let result = cartesianProductOf(
            //     sliceIntoChunks(selectCategory, 1),
            // ) as any[];
            // JSON.parse(JSON.stringify(result));
            let result = doComb(selectCategory);
            itemInfo.table = result;
            console.log('table');
            console.log(itemInfo.table);

            itemInfo.unitStock = [];
            if (!itemInfo.table) return;
            itemInfo.table.forEach(function (value) {
                var unitStock = {
                    unit_def: itemInfo.tableHeader,
                    unit: value,
                    price: '',
                    market_price: '',
                    cost_price: '',
                    stock: '',
                    warning: '',
                    img: '',
                };
                itemInfo.unitStock.push(unitStock);
                console.log('unitStock');

                console.log(itemInfo.unitStock);
            });
            if (flag == false) {
                itemInfo.tableHeader = [];
                itemInfo.table = [];
            }
        }
    },
    { deep: true },
);

// "pl.price": {
//     handler: function(price) {
//         this.itemInfo.unitStock.forEach(function (value) {
//             value.price = price;
//         });
//     }
// },
// "pl.market_price": {
//     handler: function(market_price) {
//         this.itemInfo.unitStock.forEach(function (value) {
//             value.market_price = market_price;
//         });
//     }
// },
// "pl.cost_price": {
//     handler: function(cost_price) {
//         this.itemInfo.unitStock.forEach(function (value) {
//             value.cost_price = cost_price;
//         });
//     }
// },
// "pl.stock": {
//     handler: function(stock) {
//         this.itemInfo.unitStock.forEach(function (value) {
//             value.stock = stock;
//         });
//     }
// },
// "pl.warning": {
//     handler: function(warning) {
//         this.itemInfo.unitStock.forEach(function (value) {
//             value.warning = warning;
//         });
//     }
// }

const addUnitDef = () => {
    const unit = {
        unitDefId: '',
        unitDef: '',
        unit: [],
    };

    itemInfo.unitList.push(unit);
    console.log('新增添加分类');
    console.log(itemInfo.unitList);
};
const addUnit = (key) => {
    console.log(key);
    const unit = '';
    itemInfo.unitList[key]['unit'].push(unit);
    console.log(itemInfo.unitList[key]['unit']);

    updateSelectUnit();
};
const delUnit = (key, k) => {
    itemInfo.unitList[key]['unit'].splice(k, 1);
    updateSelectUnit();
};
const delUnitDef = (key) => {
    itemInfo.unitList.splice(key, 1);
    updateSelectUnit();
};
const searchUnitDef = (item) => {
    updateSelectUnit();
};
const updateSelectUnit = () => {
    console.log(22);

    unitDefLimit = [];
    itemInfo.unitList.forEach((value) => {
        unitDefLimit.push(value.unitDefId);
        value.unit.forEach((v) => {
            if (v != '') {
                unitLimit.push(v);
            }
        });
    });
};
const unitSelect = (item) => {
    console.log(11);
    updateSelectUnit();
};
const submitForm = (formName) => {
    // var that = this;
    // if (subFlag.value == true) {
    //     // this.$message({
    //     //     message: '已经提交 请勿重复提交',
    //     //     type: 'error',
    //     // });
    // }
    // subFlag.value = true;
    // itemInfo['unit'] = this.table;
    // var form = itemInfo;
    // this.$refs[formName].validate((valid) => {
    //     if (valid) {
    //         this.$emit('startFormat', form);
    //     } else {
    //         // that.subFlag = false;
    //         // that.$message({
    //         //     message: '商品信息填写不完整,请先完善商品信息',
    //         //     type: 'error',
    //         // });
    //         return false;
    //     }
    // });
};
// const resetForm = (formName) => {
//     this.$refs[formName].resetFields();
// },
//async beforeUnitUpload(file) {
//     const types = ['image/jpeg', 'image/jpg', 'image/png'];
//     const isImage = types.includes(file.type);
//     const isLt2M = file.size / 1024 / 1024 < 2;
//     if (!isImage) {
//         //this.$message.error('上传图片只能是 JPG、JPEG、PNG 格式!');
//     }
//     if (!isLt2M) {
//         //this.$message.error('上传图片大小不能超过 2MB!');
//     }
//     if (isImage && isLt2M) {
//         let fd = new FormData();
//         fd.append('img', file);
//         // const res = await fetchImgUrl(fd);
//         // imgMainUrlData.value = res.result.full_name;
//     }
//     return isImage && isLt2M;
// },
function cartesianProductOf() {
    console.log(8888);

    return Array.prototype.reduce.call(
        arguments,
        function (a, b) {
            var ret = [];
            a.forEach(function (a) {
                b.forEach(function (b) {
                    ret.push(a.concat([b]));
                });
            });
            return ret;
        },
        [[]],
    );
}
</script>
​
<style lang="less" scoped>
.mt20 {
    margin-top: 20px;
}

[v-cloak] {
    display: none;
}

input[type='file'] {
    display: none;
}

.el-tag + .el-tag {
    margin-left: 10px;
}

.button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
}

.input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
}

.w-e-text-container {
    height: 520px !important;
}

​ .unit-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

::v-deep .el-upload--picture-card {
    height: 30px;
    width: 30px;
    line-height: 30px;
}

.unit-uploader .el-upload:hover {
    border-color: #409eff;
}

.unit-uploader-icon {
    font-size: 14px;
    color: #8c939d;
    width: 30px;
    height: 30px;
    text-align: center;
}

.unit {
    width: 30px;
    height: 30px;
    display: block;
    line-height: 30px;
}
</style>
​
