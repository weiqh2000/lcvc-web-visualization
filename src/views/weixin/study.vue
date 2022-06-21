<template>
    <div class="population">
        <div class="tops">
            <span class="texts">每项任务被学习次数</span>
        </div>
        <div id="main6" style="width: 100%;height: 100%;">
        </div>
    </div>
</template>

<script>
    export default {
        name: "study",
        data() {
            return {
            }
        },
        mounted() {
            this.main6();
        },
        methods: {
            getData(){
                return new Promise((resolve) => {
                    this.$http.get("/getTaskDetail").then((res)=>{
                        resolve(res.data)
                    })
                })
            },
            async main6() {
                var echarts = require('echarts');
                var chartDom = document.getElementById('main6');
                var myChart = echarts.init(chartDom);
                var option;
                let data = await this.getData();
                option = {
                    xAxis: {
                        type: 'category',
                        axisLine: {
                            // show: false,
                            lineStyle: {
                                // color: "#fff",
                            },
                        },
                        axisLabel:{
                            interval: 0,//使x轴文字显示全

                        },
                        axisTick: {
                            show: false,
                        },
                        data: ['任务一', '任务二', '任务三', '任务四', '任务五', '任务六', '任务七','任务八', '任务九']
                    },
                    yAxis: [{
                        type: 'value',
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            show: true
                        },
                        show: true,
                        name: "单位：次数",
                    }
                    ],
                    grid: {
                        height: '43%',
                        top: '25%',
                        // containLabel: true
                    },
                    series: [
                        {
                            data: Object.values(data),
                            type: 'bar',
                            showBackground: true,
                            barWidth: 8,
                            backgroundStyle: {
                                color: 'rgba(180, 180, 180, 0.2)'
                            },
                            itemStyle:{
                                borderRadius: [26, 26, 0, 0],

                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,       //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
                                    [
                                        {offset: 1, color: '#16CEB9'},
                                        {offset: 0, color: '#3E2FBB'}
                                    ]
                                )
                            }

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
        width: 100%;
        height: 100%;
        background: url("../../assets/imgae/8@2x.png") no-repeat;
        background-position: center center;
        background-size: 100% 100%;
    }
    .tops{
        text-align: left;
        padding-top: 5px;
        .texts{
            font-size: 16px;
            margin-left: 10px;
        }
    }
</style>


