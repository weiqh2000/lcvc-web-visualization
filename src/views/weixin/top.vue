<template>
    <div class="top">
<!--        <el-image src="../../assets/imgae/topimg.png"></el-image>-->
        <el-image :src="require('../../assets/imgae/topimg.png')"></el-image>
<!--        <img class="images" src="../../assets/imgae/topimg.png">-->
    </div>
</template>

<script>
    export default {
        name: "top",
        data() {
            return {
                fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
                url: "../../assets/imgae/topimg.png"
            }
        }
    }
</script>

<style scoped lang="less">
    .top{
        .images{

        }
        /*width: 100%;*/
        /*height: 100vh;*/
        /*background: url("../../assets/imgae/topimg.png") no-repeat;*/
        /*background-position: center center;*/

    }

</style>
