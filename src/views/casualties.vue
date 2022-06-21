<template>
    <div>
        <div id="bottom3" :style="{width: '100%', height: '230px'}"></div>
    </div>
</template>

<script>
    export default {
        name: "casualties",
        data() {
            return {
            }
        },
        mounted() {
            this.bottom3();
        },
        methods: {
            bottom3() {
                var echarts = require('echarts');
                var chartDom = document.getElementById('bottom3');
                var myChart = echarts.init(chartDom);
                var option;

                option = {
                    title: {
                        text: '{A| ' + '伤亡人数'+ '}',
                        textStyle: {
                            rich: {
                                A: {
                                    //设置背景图片，可以设置width和height，不设置时宽高自适应
                                    backgroundColor: {
                                        image: require('../assets/imgae/kuan@2x.png'),
                                    },
                                    color: '#fff',
                                    padding: [8,6,8,0],
                                    fontSize:17,
                                },
                            },
                        },
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        right: "8%",
                        data: ['数据展示2', '数据展示1'],
                        textStyle: {
                            color: '#fff',
                        }
                    },

                    calculable: true,
                    xAxis: [
                        {
                            type: 'category',
                            // prettier-ignore
                            data: ['数据展示', '数据展示', '数据展示', '数据展示', '数据展示', '数据展示'],
                            axisLine: {
                                show: false,
                                lineStyle: {
                                    color: "#fff",
                                },
                            },
                            axisLabel: {
                                fontSize: 9,
                            },
                            axisTick: {
                                show: false,
                            },
                            show: true,
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            axisLine: {
                                // show: false,
                                lineStyle: {
                                    color: "#fff",
                                },
                            },
                            max: 350,
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    type: "dashed",
                                    color: "#867e7e",
                                }
                            }
                        }
                    ],
                    series: [
                        {
                            name: '数据展示1',
                            type: 'bar',
                            barWidth: 10,
                            data: [250,130,130,250,250,250],
                            itemStyle: {//柱状图上方显示数值
                                emphasis: {
                                    barBorderRadius: [25,25,0,0],
                                },
                                normal: {
                                    barBorderRadius: [25,25,0,0],//圆角
                                    color: '#42E0F6',
                                }
                            },
                        },
                        {
                            name: '数据展示2',
                            type: 'bar',
                            barWidth: 10,
                            data:[250,130,130,250,250,250],
                            itemStyle: {//柱状图上方显示数值
                                emphasis: {
                                    barBorderRadius: [25,25,0,0],
                                },
                                normal: {
                                    barBorderRadius: [25,25,0,0],//圆角
                                    color: '#8509D7',
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
<style scoped>

</style>
