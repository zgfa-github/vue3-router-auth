<template>
    <!-- <el-button text @click="dialogVisible = true"
      >click to open the Dialog</el-button
    > -->

    <el-dialog
        v-model="dialogVisible"
        title="Tips"
        width="30%"
        :before-close="handleClose"
    >
        <span>你确定退出登录?</span>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="handleClickCancle">取消</el-button>
                <el-button type="primary" @click="handleClickConfirm"
                    >确定</el-button
                >
            </span>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { ElMessageBox } from 'element-plus';
/** vue3 有关props的新写法
 * 用defineProps接受父组件传过来的参数
 */
const props = defineProps({
    dialogVisible: {
        type: Boolean,
        required: true,
        default: () => false,
    },
});
console.log(props);
/**defineEmits 父子之间触发监听事件写法
 * 这是typescript写法
 */
const emit = defineEmits<{
    (e: 'changeConfirm', bool: boolean): void;
    (e: 'changeCancle', bool: boolean): void;
    (e: 'update', value: string): void;
}>();
const handleClickConfirm = () => {
    console.log('子组件触发父组件事件，以及传参过来');
    emit('changeConfirm', false);
};
const handleClickCancle = () => {
    emit('changeCancle', false);
};

const handleClose = (done: () => void) => {
    // ElMessageBox.confirm('你确定退出登录?')
    //     .then(() => {
    //         done();
    //     })
    //     .catch(() => {
    //         // catch error
    //     });
};
</script>
<style scoped>
.dialog-footer button:first-child {
    margin-right: 10px;
}
</style>
