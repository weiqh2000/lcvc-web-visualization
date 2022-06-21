<template>
    <diV>
<!--        <div style="position:absolute;z-index:99;">-->
<!--            <Selector></Selector>-->
<!--        </div>-->
<!--        <div id="main3" style="z-index:99;" :style="{width: '100%', height: '210px',top:'-30px',}"></div>-->
        <div style="width: 100%;height: 210px;position:relative">
            <!--这里是echarts绘图区域-->
            <div id="main3" style="width: 100%;height: 210px;z-index:99;position:absolute;">
            </div>
            <!--这里是放置按钮让其显示在最前面-->
            <div style="z-index:999;float:left;position:absolute;top: 10px">
                <Selector></Selector>
            </div>
        </div>
    </diV>
</template>

<script>
    import Selector from '@/views/selector.vue'
    export default {
        name: "frequency",
        components: {
            Selector
        },
        data() {
            return {
            }
        },
        mounted() {
            this.main3();
        },
        methods: {
            main3() {
                var echarts = require('echarts');
                var chartDom = document.getElementById('main3');
                var myChart = echarts.init(chartDom);
                var option;

                option = {
                    title: {
                        text: '{A| ' + '警情次数统计'+ '}',
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
                        data: ['数据展示2'],
                        textStyle: {
                            color: '#fff',
                        }
                    },

                    calculable: true,
                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: false,
                            data: ['2.12', '2.13', '2.14', '2.15', '2.16', '2.17'],
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
                                    // type: "dashed",
                                    color: "#867e7e",
                                }
                            }
                        }
                    ],
                    series: [
                        {
                            name: '数据展示1',
                            type: 'line',
                            stack: 'Total',
                            areaStyle: {},
                            smooth: true,
                            barWidth: 10,
                            data: [250,130,330,150,280,100],
                            itemStyle: {//柱状图上方显示数值
                                emphasis: {
                                    barBorderRadius: [25,25,0,0],
                                },
                                normal: {
                                    barBorderRadius: [25,25,0,0],//圆角
                                    color: '#44F0FF',
                                }
                            },
                        },
                    ]
                };

                option && myChart.setOption(option);
            },
        }
    }
</script>

<style scoped>
</style>
