<template>
    <div>
<!--        <Selector></Selector>-->
<!--        <div id="main2" :style="{width: '100%', height: '210px',top:'-30px'}"></div>-->
        <div style="width: 100%;height: 210px;position:relative">
            <!--这里是echarts绘图区域-->
            <div id="main2" style="width: 100%;height: 210px;z-index:99;position:absolute;">
            </div>
            <!--这里是放置按钮让其显示在最前面-->
            <div style="z-index:999;float:left;position:absolute;top: 10px">
                <Selector></Selector>
            </div>
        </div>
    </div>
</template>

<script>
    import Selector from '@/views/selector3.vue'
    export default {
        name: "region",
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
                var chartDom = document.getElementById('main2');
                var myChart = echarts.init(chartDom);
                var option;

                option = {
                    title: {
                        text: '{A| ' + '地区警情展示'+ '}',
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
                            type: 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'value',
                        show: false,
                        // boundaryGap: [0, 0.01]
                    },
                    yAxis: {
                        type: 'category',
                        data: ['包河', '庐阳', '蜀山', '经开', '高新', '长丰','庐江'],
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
                    series: [
                        {
                            name: '2011',
                            type: 'bar',
                            data: [8, 4, 7, 13, 16, 6,14],
                            showBackground: true,
                            barWidth: 8,
                            backgroundStyle: {
                                color: '#491292',
                                borderRadius: 9,
                                shadowColor: "rgba(181, 9, 9, 1)",
                            },
                            itemStyle: {//柱状图上方显示数值
                                emphasis: {
                                    barBorderRadius: 9,
                                },
                                normal: {
                                    barBorderRadius: 9,//圆角
                                    label: {
                                        show: true, //开启显示
                                        position: 'right', //在上方显示
                                        textStyle: { //数值样式
                                            color: '#fff',
                                            fontSize: 10
                                        },
                                        formatter(params) {
                                            return (params.data+'起');
                                        },
                                    },
                                    color: function(params) {
                                        let colorList = ['#A507F7','#36DCF9', '#2275EC', '#30DDFA', '#2A71EA', '#A501FD', '#34DCF5', '#1F76E5'];// 给出颜色组
                                        return colorList[params.dataIndex]
                                    }
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
