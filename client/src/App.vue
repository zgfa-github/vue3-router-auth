<template>
    <el-container class="home_container">
        <!-- 头部区域 -->
        <el-header>
            <div>
                <img src="../assets/heima.png" alt="" />
                <span>电商后台管理系统</span>
            </div>
            <el-button type="info" @click="logout">退出</el-button>
        </el-header>
        <el-container>
            <Aside />
            <Main />
            <Footer />
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios';
import qs from 'qs';
import { getRouterAuth } from './services/getRouterAuth';
import Aside from './components/Aside.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
import { ref, onMounted } from 'vue';
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue';
import Layout from './components/layout/Layout.vue';
import MenuPlusItem from './components/MenuPlusItem.vue';
import MenuItem from './components/MenuItem.vue';

onMounted(async () => {
    // console.log('开始');
    // let res2 = await getRouterAuth({uid: 1})
    // console.log(res2);
});

// axios.post('api/getRouterAuth', qs.stringify({
//   uid: 3
// })).then(res => {
//   console.log(res);
// })
const logout = () => {};
</script>

<style lang="less">
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
.el-header {
    background-color: #363d40;
    // 给头部设置一下弹性布局
    display: flex;
    // 让它贴标左右对齐
    justify-content: space-between;
    // 清空图片左侧padding
    padding-left: 0;
    // 按钮居中
    align-items: center;
    // 文本颜色
    color: #fff;
    // 设置文本字体大小
    font-size: 20px;
    // 嵌套
    > div {
        // 弹性布局
        display: flex;
        // 纵向上居中对齐
        align-items: center;
        // 给文本和图片添加间距，使用类选择器
        span {
            margin-left: 15px;
        }
    }
}
.el-aside {
    // background-color: #313743;
    .el-menu {
        border-right: none;
    }
}
.el-main {
    background-color: #e9edf1;
}
.iconfont {
    margin-right: 10px;
}
.toggle-button {
    // 添加背景颜色
    background-color: #4a5064;
    // 设置文本大小
    font-size: 10px;
    // 设置文本行高
    line-height: 24px;
    // 设置文本颜色
    color: #fff;
    // 设置文本居中
    text-align: center;
    // 设置文本间距
    letter-spacing: 0.2em;
    // 设置鼠标悬浮变小手效果
    cursor: pointer;
}
// .layout-container-demo .el-header {
//     position: relative;
//     background-color: var(--el-color-primary-light-7);
//     color: var(--el-text-color-primary);
// }
// .layout-container-demo .el-aside {
//     color: var(--el-text-color-primary);
//     /* background: var(--el-color-primary-light-8); */
//     border-right: 1px solid #ccc;
// }
// .layout-container-demo .el-menu {
//     border-right: none;
// }
// .layout-container-demo .el-main {
//     padding: 0;
// }
// .layout-container-demo .toolbar {
//     display: inline-flex;
//     align-items: center;
//     justify-content: center;
//     height: 100%;
//     right: 20px;
// }
// .el-aside .el-scrollbar {
//     background: #e5e5e5;
// }
</style>
