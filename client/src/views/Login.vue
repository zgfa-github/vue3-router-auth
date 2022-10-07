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
        <el-form-item label="Confirm" prop="password">
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
import { login } from '@/services/login';
import { routerBeforeEach } from '@/router/route';
import store from '@/store';
import router from '@/router';

const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
    username: '',
    password: '',
});
const validatePass = () => {};
const validatePass2 = () => {};
const checkAge = () => {};

const rules = reactive({
    pass: [{ validator: validatePass, trigger: 'blur' }],
    checkPass: [{ validator: validatePass2, trigger: 'blur' }],
    age: [{ validator: checkAge, trigger: 'blur' }],
});
let result = useRouter();
console.log(result);
const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.validate(async (valid) => {
        if (valid) {
            console.log('submit!');
            let res = await login(ruleForm);

            result.push({ path: '/' });
            routerBeforeEach(router, store);
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
