<template>
    <div class="population">
        <div class="tops">
            <span class="texts">步数排名</span>
        </div>
        <!-- <div style="overflow:hidden"> -->
            <div id="main3" style="width: 100%;height: 100%;"></div>
        <!-- </div> -->
    </div>
</template>

<script>
    export default {
        name: "stepRank",
        data() {
            return {
                value:[8, 4, 7, 13, 16, 6,14],
            }
        },
        mounted() {
            this.main3();
        },
        methods: {
            getData(){
                return new Promise((resolve) => {
                    this.$http.get("/alltop").then((res)=>{
                        resolve(res.data.data)
                    })
                })
            },
            async main3() {
                var echarts = require('echarts');
                var chartDom = document.getElementById('main3');
                var myChart = echarts.init(chartDom);
                var option;
                let i = await this.getData();
                var list1 = new Array();
                var list2 = new Array();
                i.forEach((item)=>{
                    list1.push(Object.values(item)[2])
                    list2.push(Object.values(item)[5])
                });
                list1 = list1.reverse()
                list2 = list2.reverse()
                option = {
                    tooltip: {
                        transitionDuration: 0,
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    grid: {
                        height: '80%',
                        top:'10%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'value',
                        show: false,
                        // position:'top',
                        // boundaryGap: [0, 0.01]
                    },
                    yAxis: [{
                        type: 'category',
                        data: list1,
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: "#fff",
                            },
                        },

                        axisTick: {
                            show: false,
                        },
                        show: true,
                        axisLabel: {
                        },

                    },
                        {
                            type: 'category',
                            data: list2,
                            axisTick: { // 刻度
                                show: false // 不显示刻度线
                            },
                            axisLine: { // 设置轴线
                                show: false
                            },
                            axisLabel: {
                                textStyle: {
                                    // fontFamily: 'MicrosoftYaHei',
                                    fontSize: '12',
                                    color: '#18C6B9',
                                }
                            },
                        }
                    ],
                    series: [
                        {
                            // name: '2011',
                            type: 'bar',
                            data: list2,
                            showBackground: true,
                            barWidth: 4,
                            itemStyle:{
                                // borderRadius: [26, 26, 0, 0],
                                color: new echarts.graphic.LinearGradient(
                                    1, 0, 0, 0,       //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
                                    [
                                        {offset: 1, color: '#3E2FBB'},
                                        {offset: 0, color: '#16CEB9'}
                                    ]
                                )
                            }

                        },
                    ]
                };

                option && myChart.setOption(option);

            },
        }
    }
</script>

<style lang="less" scoped>

    .population{
        padding: 0px;
        margin: 0px;
        width: 100%;
        height: 100%;
        background: url("../../assets/imgae/3@2x.png") no-repeat;
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

