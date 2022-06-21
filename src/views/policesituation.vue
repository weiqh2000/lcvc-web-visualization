<template>
    <div>
        <div id="bottom1" :style="{width: '100%', height: '230px'}"></div>
    </div>
</template>

<script>
    export default {
        name: "policesituation",
        data() {
            return {
            }
        },
        mounted() {
            this.bottom1();
        },
        methods: {
            bottom1() {
                var echarts = require('echarts');
                var chartDom = document.getElementById('bottom1');
                var myChart = echarts.init(chartDom);
                var option;

                option = {
                    title: {
                        text: '{A| ' + '警情分布'+ '}',
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
                        transitionDuration:0,
                        trigger: 'item'
                    },
                    legend: {
                        right: "3%",
                        textStyle: {
                            color: '#fff',
                            fontSize: 9,
                        },
                        width:'60%',
                    },
                    series: [
                        {
                            name: 'Access From',
                            type: 'pie',
                            barWidth: 10,
                            top:50,
                            radius: ['40%', '60%'],
                            avoidLabelOverlap: false,
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
                            labelLine: {
                                show: true,
                                lineStyle: {
                                    color: "#fff",
                                },
                            },
                            data: [
                                { value: 300, name: '经开' },
                                { value: 1048, name: '蜀山' },
                                { value: 735, name: '庐江' },
                                { value: 580, name: '庐阳' },
                                { value: 484, name: '包河' },
                                { value: 300, name: '长丰' },
                            ]
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
