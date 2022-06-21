<template>
    <div class="top">智慧消防数据大屏
<!--        <el-image :src="image"></el-image>-->
    </div>
</template>

<script>
    export default {
        name: "heads",
        data(){
            return{
                image:require('/src/assets/imgae/topimg.png')
            }
        }
    }
</script>

<style lang="less" scoped>
.top{
    color: #ffffff;
    height: 3rem;
    font-size: 28px;
    width: 100%;
    background: url("../assets/imgae/topimg.png") no-repeat;
    background-size: 100% 100%;
}

</style>
