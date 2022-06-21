<template>
    <div class="population">
        <div class="tops">
            <span class="texts">近30天访问人流量</span>
        </div>
        <div id="main5" style="width: 100%;height: 100%;"></div>
    </div>
</template>

<script>
    export default {
        name: "visitorFlow",
        data(){
            return{
                datas:[140, 142, 121, 164, 130, 150, 150,140, 142, 121, 164, 130, 150, 150,140, 142, 121, 164, 130, 150],
            }
        },
        mounted() {
            this.main5();
        },
        methods: {
            getUse(){
                // https://wxapi.weiqh.net/api/wx/getUseUser
                return new Promise((resolve) => {
                    this.$http.get("/getUseUser").then((res)=>{
                        resolve(res.data.data)
                    })
                })
            },
            getUser(){
                // https://wxapi.weiqh.net/api/wx/getRegister
                return new Promise((resolve) => {
                    this.$http.get("/getRegister").then((res)=>{
                        resolve(res.data.data)
                    })
                })
            },
            async main5() {
                var echarts = require('echarts');
                var chartDom = document.getElementById('main5');
                var myChart = echarts.init(chartDom);
                var option;
                var list1 = new Array();
                var list2 = new Array();
                let use = await this.getUse();
                let user = await this.getUser();
                use.forEach((item)=>{
                    list1.push(Object.values(item)[1])
                });
                user.forEach((item)=>{
                    list2.push(Object.values(item)[1])
                });
                option = {
                    color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
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
                        data: ['注册人数', '使用人次'],
                        left: "53%",
                        textStyle: {
                            color: "#fff"
                        }
                    },
                    grid: {
                        height: '50%',
                        top: '20%',
                        // containLabel: true
                    },

                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: false,
                            axisTick: {
                                show: false,
                            },
                            name: "天",
                            data: ['1', '2', '3', '4', '5', '6', '7','8','9','10'
                            ,'11', '12', '13', '14', '15', '16', '17','18','19','20','21'
                            ,'22','23','24','25','26','27','28','29','30','31'
                            ]
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            axisLine: {
                                show: true
                            },
                            // show: true,
                            name: "单位：人次",
                        }
                    ],
                    series: [
                        {
                            name: '注册人数',
                            type: 'line',
                            // stack: 'Total',
                            smooth: 0.7,
                            showSymbol: false,
                            areaStyle: {
                                // opacity: 0.8,
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: 'rgb(128, 255, 165)'
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgb(1, 191, 236)'
                                        }
                                    ]
                                )
                            },
                            // emphasis: {
                            //   focus: 'series'
                            // },
                            data: list2,
                        },
                        {
                            name: '使用人次',
                            type: 'line',
                            // stack: 'Total',
                            smooth: 0.7,
                            showSymbol: false,
                            areaStyle: {
                                opacity: 0.8,
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: 'rgb(0, 221, 255)'
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgb(77, 119, 255)'
                                    }
                                ])
                            },
                            data: list1
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
