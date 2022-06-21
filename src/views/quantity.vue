<template>
    <div>
<!--        <Selector></Selector>-->
<!--        <div id="bottom2" :style="{width: '100%', height: '230px',top:'-30px'}"></div>-->
        <div style="width: 100%;height: 210px;position:relative">
            <!--这里是echarts绘图区域-->
            <div id="bottom2" style="width: 100%;height: 210px;z-index:99;position:absolute;">
            </div>
            <!--这里是放置按钮让其显示在最前面-->
            <div style="z-index:999;float:left;position:absolute;top: 5px;right: 10px">
                <Selector></Selector>
            </div>
        </div>
    </div>
</template>
<script>
    import Selector from '@/views/selector2.vue'
    export default {
        name: "quantity",
        components: {
            Selector
        },
        data() {
            return {
                value:[8, 4, 7, 13, 16, 6,14],
            }
        },
        mounted() {
            this.main2();
        },
        methods: {
            main2() {
                var echarts = require('echarts');
                var chartDom = document.getElementById('bottom2');
                var myChart = echarts.init(chartDom);
                var option;

                option = {
                    title: {
                        text: '{A| ' + '警情数量统计'+ '}',
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
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#6a7985'
                            }
                        }
                    },
                    legend: {
                        data: ['数据展示1', '数据展示2'],
                        textStyle: {
                            color: '#fff',
                            fontSize: 9,
                        },
                        right: 350,
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: false,
                            data: ['数据展示', '数据展示', '数据展示', '数据展示', '数据展示', '数据展示', '数据展示'],
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    // type: "dashed",
                                    color: "#867e7e",
                                }
                            },
                            axisLine: {
                                show: false,
                                lineStyle: {
                                    color: "#fff",
                                },
                            },
                            axisTick: {
                                show: false,
                            },
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
                            // max: 350,
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
                            itemStyle: {
                                // color: "#44EDF9",
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,       //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
                                    [
                                        {offset: 1, color: '#44edf9'},
                                        {offset: 0, color: 'rgba(68,237,249,0.43)'}
                                    ]
                                )
                            },
                            emphasis: {
                                focus: 'series'
                            },
                            data: [120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name: '数据展示2',
                            type: 'line',
                            stack: 'Total',
                            areaStyle: {},
                            emphasis: {
                                focus: 'series'
                            },
                            itemStyle: {
                                // color: "#2542C2",
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,       //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
                                    [
                                        {offset: 1, color: '#2542C2'},
                                        {offset: 0, color: 'rgba(37,66,194,0.36)'}
                                    ]
                                )
                            },
                            data: [220, 182, 191, 234, 290, 330, 310]
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
