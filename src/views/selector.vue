<template>
    <div class="top">
        <div class="xz">
            <el-select v-model="value" placeholder="请选择">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
        </div>
        <div class="xz">
            <el-select v-model="value" placeholder="请选择">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
        </div>
        <div class="xz">
            <el-select v-model="value" placeholder="请选择">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
        </div>
    </div>
</template>

<script>
    export default {
        name: "selector",
        data() {
            return {
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: '安徽'
            }
        }
    }
</script>

<style lang="less" scoped>
    .top{
        margin-left: 20%;
        width: 70%;
        display: flex;
        /*justify-content: space-around;*/
        z-index: 999;
    }
    .xz{
        width: 30%;
        margin-left: 5px;
    }
    /deep/ .el-select,
    /deep/ .el-input,
    /deep/ .el-input__inner{
        background-color:transparent !important;
        border-radius: 25px;
        height: 25px;
        font-size: 6px;
        line-height: 30px;
        color:#fff;
        padding: 0 15px 0 15px;
        width: 95%;

    }
    /deep/ .el-input__icon {
        height: 100%;
        width: 25px;
        text-align: center;
        transition: all .3s;
        line-height: 40px;
        margin-top: 10px;
        margin-right: 15px;
    }
    //修改总体选项的样式 最外层
    .el-select-dropdown{
        background-color: #ffffff22;
    }
//鼠标经过下拉框
.el-select-dropdown__item.hover,
.el-select-dropdown__item:hover{
    color:#00D3E9;
    background-color: transparent !important;
}
</style>
