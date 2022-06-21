<template>
<div class="top">
    <div class="top1">
       <div class="top1_s">
           <div class="span">
               188
           </div>
           <div class="span">
               今日警情
           </div>
       </div>
    </div>
    <div class="top2">
        <div class="top1_s">
            <div class="span">
                188
            </div>
            <div class="span">
                今日出警
            </div>
        </div>
    </div>
    <div class="top3">
        <div class="top1_s">
            <div class="span">
                1344
            </div>
            <div class="span">
                装备数量
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: "circular"
    }
</script>

<style lang="less" scoped>
.top{
    color: #ffffff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height:100%;
    .top1{
        width: 33%;
        text-align: center;
        height:100%;
        background: url("../assets/imgae/quan3.png") no-repeat;
        background-position: center center;
        background-size: 110px 110px;
        .top1_s{
            /*background: #42b983;*/
            height:100%;
            margin-top: 55%;
            text-align: center;
            .span{
                text-align: center;
            }
        }
    }
    .top2{
        width: 33%;
        height:100%;
        background: url("../assets/imgae/quan1.png") no-repeat;
        background-position: center center;
        background-size: 110px 110px;
        .top1_s{
            /*background: #42b983;*/
            height:100%;
            margin-top: 55%;
            text-align: center;
            .span{
                text-align: center;
            }
        }
    }
    .top3{
        width: 33%;
        height:100%;
        background: url("../assets/imgae/quan2.png") no-repeat;
        background-position: center center;
        background-size: 110px 110px;
        .top1_s{
            /*background: #42b983;*/
            height:100%;
            margin-top: 55%;
            text-align: center;
            .span{
                text-align: center;
            }
        }
    }
}

</style>
