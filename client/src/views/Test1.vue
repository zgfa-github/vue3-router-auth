<template>
    <main-title>
        <template #title>test1</template>
    </main-title>
    <!--头部分词-->
    <div class="bread4">
        <el-breadcrumb separator="&gt;">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item
                ><a href="/">英文单词管理</a></el-breadcrumb-item
            >
        </el-breadcrumb>
    </div>
    <!--搜索-->
    <div class="box-search">
        <div class="input5">
            <el-input
                type="text"
                size="small"
                v-model="searchInfo.searchKey"
                @keydown.native.enter="searchEnglishList"
                @clear="searchEnglishList"
                placeholder="英文/中文"
            ></el-input>
        </div>
        <div class="button5">
            <el-button
                @click="searchEnglishList"
                size="small"
                type="primary"
                icon="el-icon-search"
                >搜索</el-button
            >
            <el-button
                @click="clkBtnAdd"
                size="small"
                type="warning"
                icon="el-icon-plus"
                >新增</el-button
            >
        </div>
    </div>
    <!--表格-->
    <div class="box-table5">
        <el-table
            :border="true"
            :data="englishPage.list"
            style="width: 100%"
            :header-cell-style="{
                'background-color': '#999',
                color: '#fff',
            }"
        >
            <el-table-column type="index" label="序号" width="80">
            </el-table-column>
            <el-table-column prop="world" label="英文单词" width="180">
            </el-table-column>
            <el-table-column prop="chinese" label="中文解释" width="180">
            </el-table-column>
            <el-table-column label="操作" width="180">
                <template #default="scope">
                    <el-button
                        type="warning"
                        size="small"
                        @click="editInfo(scope.$index, scope.row.index)"
                        >修改</el-button
                    >
                    <el-button
                        type="primary"
                        size="small"
                        @click="clkBtnDelete(scope.$index, scope.row.index)"
                        >删除</el-button
                    >
                </template>
            </el-table-column>
        </el-table>
    </div>
    <div class="box-page5">
        <el-pagination
            layout="prev, pager, next"
            @current-change="chgPageNum"
            :page-size="englishPage.pageSize"
            :total="englishPage.total"
        >
        </el-pagination>
    </div>
    <el-dialog title="保存信息" v-model="showAddEnglish">
        <el-form :model="english" label-width="120px">
            <el-form-item label="英文单词">
                <el-input
                    v-model="english.world"
                    size="small"
                    placeholder="请输入英文单词"
                ></el-input>
            </el-form-item>
            <el-form-item label="中文解释">
                <el-input
                    v-model="english.chinese"
                    size="small"
                    placeholder="请输入中文解释"
                ></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer">
            <el-button type="primary" size="small" @click="clkBtnSave"
                >保存</el-button
            >
            <el-button
                type="warning"
                size="small"
                @click="showAddEnglish = false"
                >取消</el-button
            >
        </span>
    </el-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue';
import { getEnglishList, addEnglish, deleteEnglish } from '@/services';
import { ElMessage, ElMessageBox } from 'element-plus';
const showAddEnglish = ref(false);
const english = reactive({
    index: null,
    world: '',
    chinese: '',
});
const searchInfo = reactive({
    searchKey: '',
});
const englishPage = reactive({
    pageNum: 1,
    pageSize: 2,
    total: 0,
    list: [],
});
onMounted(() => {
    initData();
});
let obj = {
    params: {
        info: {
            pageNum: englishPage.pageNum,
            pageSize: englishPage.pageSize,
            searchKey: searchInfo.searchKey,
        },
    },
};
/**
 * 初始化
 */
const initData = async () => {
    let res = await getEnglishList(obj);
    englishPage.list = res.data.list;
    englishPage.total = res.data.total;
    console.log(res);
};
const searchEnglishList = async () => {
    console.log(searchInfo.searchKey);

    let res = await getEnglishList({
        params: {
            info: {
                pageNum: englishPage.pageNum,
                pageSize: englishPage.pageSize,
                searchKey: searchInfo.searchKey,
            },
        },
    });
    console.log(res);
    englishPage.list = res.data.list;
    englishPage.total = res.data.total;
};
/**
 * 弹窗
 */
const clkBtnAdd = () => {
    english.index = null;
    english.world = '';
    english.chinese = '';
    showAddEnglish.value = true;
};

const editInfo = (index, row) => {
    console.log(row);
    console.log(englishPage.list);
    let res = JSON.parse(JSON.stringify(englishPage.list)).filter(
        (item, i) => i == index,
    );
    console.log(res);
    let result = res[0];
    english.world = result.world;
    english.chinese = result.chinese;
    english.index = result.index;
    showAddEnglish.value = true;
};
/**
 * 分页
 * @param currentPageNum
 */
const chgPageNum = async (currentPageNum: number) => {
    console.log(currentPageNum);

    englishPage.pageNum = currentPageNum;
    let res = await getEnglishList({
        params: {
            info: {
                pageNum: englishPage.pageNum,
                pageSize: englishPage.pageSize,
                searchKey: searchInfo.searchKey,
            },
        },
    });
    englishPage.list = res.data.list;
    console.log(res);
};
/**
 * 新增/保存
 */
const clkBtnSave = async () => {
    let res = await addEnglish({
        params: {
            index: english.index,
            world: english.world,
            chinese: english.chinese,
        },
    });
    console.log(res);
    if (res.data.code == 0) {
        let res = await getEnglishList({
            params: {
                info: {
                    pageNum: englishPage.pageNum,
                    pageSize: englishPage.pageSize,
                    searchKey: searchInfo.searchKey,
                },
            },
        });
        englishPage.list = res.data.list;
        englishPage.total = res.data.total;
        console.log(res);

        showAddEnglish.value = false;
    }
};
/**
 *  删除
 * @param index
 * @param row
 * @param done
 */
const clkBtnDelete = (index, row, done: () => void) => {
    console.log(row);

    ElMessageBox.confirm('你确定要删除?', '温馨提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
    })
        .then(async () => {
            console.log('删除');
            let res = await deleteEnglish({ params: { english: row } });
            console.log(res);
            if (res == 0) {
                let res = await getEnglishList({
                    params: {
                        info: {
                            pageNum: englishPage.pageNum,
                            pageSize: englishPage.pageSize,
                            searchKey: searchInfo.searchKey,
                        },
                    },
                });
                ElMessage({
                    type: 'success',
                    message: '删除成功',
                });
                englishPage.list = res.data.list;
                englishPage.total = res.data.total;
            }
            //done();
        })
        .catch(() => {
            // catch error
            ElMessage({
                type: 'info',
                message: '取消删除',
            });
        });
};
</script>
<style lang="less">
.box-search {
    display: flex;
    padding-top: 10px;
    padding-bottom: 10px;
}
.box-search .input5 {
    padding-right: 10px;
}
.bread4 {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    background-color: #eceeef;
}
</style>
