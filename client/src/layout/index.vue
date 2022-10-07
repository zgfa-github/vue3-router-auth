<template>
    <el-container class="home_container">
        <!-- 头部区域 -->
        <el-header>
            <div>
                <img src="assets/heima.png" alt="" />
                <span>电商后台管理系统</span>
            </div>
            <el-button type="info">退出</el-button>
        </el-header>
        <el-container>
            <Aside />
            <Main />
            <Footer />
        </el-container>
    </el-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Aside from '@/components/Aside.vue';
import Main from '@/components/Main.vue';
import Footer from '@/components/Footer.vue';

const logout = () => {};
</script>

<style lang="" scoped></style>
