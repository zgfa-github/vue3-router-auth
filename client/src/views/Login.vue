<template>
    <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
    >
        <el-form-item label="用户名" prop="username">
            <el-input
                v-model="ruleForm.username"
                type="text"
                autocomplete="off"
            />
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input
                v-model="ruleForm.password"
                type="password"
                autocomplete="off"
            />
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)"
                >登录</el-button
            >
            <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
        </el-form-item>
    </el-form>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import type { FormInstance } from 'element-plus';
import { useRouter } from 'vue-router';
import { login } from '@/services';
import { routerBeforeEach } from '@/router/route';
import store from '@/store';
import router from '@/router';
import { SET_TOKEN } from '@/store/actionTypes';
import { isMobile, isPassword } from '@/utils';

const a = ref(0);
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
    username: '',
    password: '',
});
const validateUser = (rule: any, value: any, callback: any) => {
    if (!value) {
        callback(new Error('请输入用户名'));
        if (!isMobile(ruleForm.username)) {
            callback(new Error('请输入正确手机号码'));
        }
    } else if (!isMobile(ruleForm.username)) {
        callback(new Error('请输入正确手机号码'));
    } else {
        return true;
    }
};
const validatePass = (rule: any, value: any, callback: any) => {
    if (!value) {
        callback(new Error('请输入密码'));
    } else if (!isPassword(ruleForm.password)) {
        callback(new Error('请输入6位数字密码'));
    } else {
        return true;
    }
};
// const callback = (message: Error) => {
//     return message;
// };
const rules = reactive({
    username: [
        {
            validator: validateUser,
            trigger: 'blur',
            required: true,
        },
    ],
    password: [
        {
            validator: validatePass,
            trigger: 'blur',
            required: true,
        },
    ],
});
let result = useRouter();
console.log(result);
const submitForm = (formEl: FormInstance | undefined) => {
    console.log(formEl);

    if (!formEl) return;
    formEl.validate(async (valid) => {
        console.log(valid);
        if (valid) {
            console.log('submit!');
            let res = await login(ruleForm);
            console.log(res);
            await store.dispatch(SET_TOKEN, res.token);

            result.push({ path: '/' });
        } else {
            console.log('error submit!');
            return false;
        }
    });
};
const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.resetFields();
};
</script>

<style lang="less" scoped>
.demo-ruleForm {
    width: 400px;
    margin: 80px auto 0;
    box-sizing: border-box;
}
</style>
