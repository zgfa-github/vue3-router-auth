<template>
    <el-container class="vben-default-layout">
        <el-container class="ant-layout-has-sider">
            <div :style="{ flex: isCollapse ? '0 0 48px' : '0 0 210px' }"></div>
            <!--侧边栏-->
            <Aside :isCollapse="isCollapse" class="vben-layout-sideBar" />

            <el-container class="vben-default-layout-main">
                <!-- 头部区域 -->
                <el-header
                    :style="{
                        width: isCollapse
                            ? 'calc(100% - 48px)'
                            : 'calc(100% - 210px)',
                    }"
                >
                    <div>
                        <img class="logo" src="../assets/logo.png" alt="" />
                        <span>电商后台管理系统</span>
                        <el-button class="zhedie" @click="toggleCollasp"
                            >折叠</el-button
                        >
                    </div>
                    <el-button type="info" v-if="!isLogin">
                        <router-link class="link" to="/login">登录</router-link>
                    </el-button>
                    <el-button class="logout" v-else @click="logout"
                        >退出</el-button
                    >
                </el-header>
                <!--主区域-->
                <Main />
                <Footer />
            </el-container>
        </el-container>
    </el-container>
    <Dialog
        :dialogVisible="isDialogShow"
        @changeConfirm="changeConfirm"
        @changeCancle="handleCancle"
    />
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';
import Aside from '@/components/Aside.vue';
import Main from '@/components/Main.vue';
import Footer from '@/components/Footer.vue';
import Dialog from '@/components/Dialog.vue';
import { DEL_TOKEN } from '@/store/actionTypes';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
const store = useStore();
let isLogin: Ref<string | null> = ref('');
isLogin.value = localStorage.getItem('token');

const isDialogShow = ref(false);
const router = useRouter();
const logout = () => {
    console.log('退出');

    isDialogShow.value = true;
    //router.push({ path: '/' });
    //console.log(isDialogShow.value);
};
const changeConfirm = async (val: boolean) => {
    console.log(`父组件修改值为${val}后传回给子组件`);
    isDialogShow.value = val;
    isLogin.value = '';
    await store.dispatch(DEL_TOKEN);
    router.push({ path: '/login' });
};
const handleCancle = (val: boolean) => {
    isDialogShow.value = val;
};
//折叠
const isCollapse = ref(false);
const toggleCollasp = () => {
    console.log(1111);

    isCollapse.value = !isCollapse.value;
};
</script>

<style lang="less">
.vben-default-layout {
    display: flex;
    width: 100%;
    min-height: 100%;
    background-color: #000;
    flex-direction: column;
    & > .ant-layout-has-sider {
        flex-direction: row;
        min-height: 100%;
        & > .vben-layout-sideBar {
            position: fixed;
            top: 0px;
            left: 0;
            height: 100%;
            z-index: 50;
        }
    }
}
.vben-default-layout-main {
    // width: 0;
    // margin-left: 1px;
    & > .el-header {
        // width: calc(100% - 210px);
        position: fixed;
        top: 0;
        z-index: 40;
    }
}
.home_container {
    flex-direction: column;
}
.el-header .logo {
    width: 30px;
}
.el-button {
    // padding: 0;
    .link,
    &.logout {
        padding: 10px 15px;
        display: block;
    }
}
.el-button.zhedie {
    margin-left: 10px;
    span {
        margin-left: 0;
    }
}
</style>
