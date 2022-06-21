<template>
    <div class="population">
        <div class="tops">
            <span class="texts">当前排名</span>
        </div>
        <div class="titles">
            <div style="width: 35%;">
                <span class="titles_texts">生成时间</span>
            </div>
            <div style="width: 15%;">
                <span class="titles_texts">人员</span>
            </div>
            <div style="width: 35%;">
                <span class="titles_texts">系部、班级</span>
            </div>
            <div style="width: 15%;">
                <span class="titles_texts">排名</span>
            </div>
        </div>
        <div v-for="(item,index) in data" :key="index" class="content">
            <div style="width: 35%;">
                <span class="content_texts">{{item.updateTime}}</span>
            </div>
            <div style="width: 15%;">
                <span class="content_texts">{{item.name}}</span>
            </div>
            <div style="width: 35%;">
                <span class="content_texts">{{item.inClass}} {{item.specialized}}</span>
            </div>
            <div v-if="index==0" class="content_textss" style="width: 15%;">
                <span id="one">第一名</span>
            </div>
            <div v-if="index==1" class="content_textss" style="width: 15%;">
                <span>第二名</span>
            </div>
            <div v-if="index==2" class="content_textss" style="width: 15%;">
                <span>第三名</span>
            </div>
            <div v-if="index==3" class="content_textss" style="width: 15%;">
                <span >第四名</span>
            </div>
            <div v-if="index==4" class="content_textss" style="width: 15%;">
                <span>第五名</span>
            </div>
            <div v-if="index==5" class="content_textss" style="width: 15%;">
                <span >第六名</span>
            </div>
            <div v-if="index==6" class="content_textss" style="width: 15%;">
                <span >第七名</span>
            </div>
            <div v-if="index==7" class="content_textss" style="width: 15%;">
                <span >第八名</span>
            </div>
            <div v-if="index==8" class="content_textss" style="width: 15%;">
                <span >第九名</span>
            </div>
            <div v-if="index==9" class="content_textss" style="width: 15%;">
                <span >第十名</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "currentRanking",
        data() {
            return {
                data:[],
            }
        },
        created(){
            this.getTop()
        },
        mounted() {

        },
        methods:{
            getTop(){
                this.$http.get("/alltop").then((res)=>{
                    this.data = res.data.data;
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    #one{
        color: #e50e15;
    }
    .population{
        width: 100%;
        height: 100%;
        background: url("../../assets/imgae/4.png") no-repeat;
        background-position: center center;
        background-size: 100% 100%;
    }
    .tops{
        text-align: left;
        padding-top: 5px;
        .texts{
            margin-left: 10px;
            font-size: 18px;
        }
    }
    .titles{
        width: 100%;
        height: 40px;
        display: flex;
        background: url("../../assets/imgae/Rectangle25@2x.png") no-repeat;
        background-position: center center;
        background-size: 100% 100%;
        line-height: 40px;
    }
    .content{
        width: 100%;
        height: 40px;
        display: flex;
        font-size: 8px;
        line-height: 40px;
    }
    .content_textss{
        color: #f6f3f3;
    }
    /*.content_textss:nth-child(1){*/
    /*    color: #e50e15;*/
    /*}*/
    .content:nth-last-child(2n+1){
        width: 100%;
        height: 40px;
        display: flex;
        font-size: 8px;
        line-height: 40px;
        background-color: rgba(5,24,79, 0.8);
        /*opacity:0.3;*/
    }
</style>

