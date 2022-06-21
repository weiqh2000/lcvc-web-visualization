<template>
    <div class="population">
        <div class="tops">
            <span class="texts">总消耗</span>
        </div>
        <div class="steps">
            <div class="values">
                <span>{{joule}}</span>
            </div>
            <div>
                <span>焦</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "totalConsumption",
        data(){
            return{
                joule: "",
            }
        },
        created(){
            this.getJoule()
        },
        methods:{
            getJoule(){
                this.$http.get("/alljoule").then((res)=>{
                    this.joule = res.data;
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .population{
        width: 100%;
        height: 100%;
        margin: 0px;
        background: url("../../assets/imgae/1@2x.png") no-repeat;
        background-position: center center;
        background-size: 100% 100%;
    }
    .tops{
        text-align: left;
        padding-top: 5px;
        .texts{
            margin-left: 10px;
            font-size: 20px;
        }
    }
    .steps{
        width: 100%;
        height: 100%;
        background: url("../../assets/imgae/marshalling4@2x.png") no-repeat;
        background-position: center 20%;
        background-size: 130px 130px;
        .values{
            font-size: 23px;
            padding-top: 70px;
        }
    }
</style>
