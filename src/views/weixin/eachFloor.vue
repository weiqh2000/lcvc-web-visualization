<template>
    <div class="population">
        <div class="tops">
            <span class="texts">各楼层访问人数占比</span>
        </div>
        <div id="main4" style="width: 100%;height: 100%;"></div>
    </div>
</template>

<script>
    export default {
        name: "eachFloor",
        mounted() {
            this.main4();
        },
        methods: {
            getData(){
                return new Promise((resolve) => {
                    this.$http.get("/getfloor").then((res)=>{
                        resolve(res.data)
                    })
                })
            },
            async main4() {
                var echarts = require('echarts');
                var chartDom = document.getElementById('main4');
                var myChart = echarts.init(chartDom);
                var option;
                let i = await this.getData();
                option = {
                    series: [
                        {
                            name: 'Access From',
                            type: 'pie',
                            radius: '50%',
                            data: [
                                { value: Object.values(i)[2], name: '2楼    '+Object.values(i)[2] },
                                { value: Object.values(i)[3], name: '3楼    '+Object.values(i)[3] },
                                { value: Object.values(i)[4], name: '4楼    '+Object.values(i)[4] },
                            ],
                            itemStyle: {
                                borderColor: '#fff',
                                borderWidth: 5,
                                normal: {
                                    color: function(params) {
                                        let colorList = ['#10CEFE','#1074FF', '#0140FA', '#3A16DA', '#5D2BEC', '#254BF3', '#34DCF5', '#1F76E5'];// 给出颜色组
                                        return colorList[params.dataIndex]
                                    }
                                }
                            },

                        }
                    ]
                };

                option && myChart.setOption(option);

            },
        }
    }
</script>

<style lang="less" scoped>
    .population{
        margin: 0px;
        width: 100%;
        height: 100%;
        background: url("../../assets/imgae/8.png") no-repeat;
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
</style>


