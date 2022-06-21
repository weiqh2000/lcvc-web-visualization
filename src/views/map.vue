<template>
    <div>
        <div id="container" :style="{width: '100%', height: '420px'}"></div>
    </div>
</template>

<script>
    import hefei from '../assets/js/hefei.json'
    import 'echarts-gl';
    export default {
        name: "maps",
        data() {
            return {
            }
        },
        mounted() {
            this.container();
        },
        methods: {
            container() {
                var echarts = require('echarts');
                echarts.registerMap('hefei',hefei)
                var chartDom = document.getElementById('container');
                var myChart = echarts.init(chartDom);
                var option;

                option = {
                    //左侧小导航图标
                    //visualMap是视觉映射组件，用于进行『视觉编码』，也就是将数据映射到视觉元素（视觉通道）
                    visualMap: {
                        show : false,  //是否显示 visualMap-continuous 组件。如果设置为 false，不会显示，但是数据映射的功能还存在
                        x: 'left',    // 显示再左侧
                        y: 'center',  // 显示再中部
                        splitList: [
                            {start: 2000, end:3000},{start: 1000, end: 2000},
                            {start: 800, end: 1000},{start: 500, end: 800},
                            {start: 200, end: 500},{start: 0, end: 200},
                        ],
                        color: ['#5475f5', '#9feaa5', '#85daef','#74e2ca', '#e6ac53', '#9fb5ea']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',

                    },
                    tooltip: {
                    },
                    series: [
                        {
                            name: '中国',
                            type: 'map3D',
                            map: 'hefei',
                            zoom: 1.2,
                            // layoutCenter: ['30%', '30%'],
// 如果宽高比大于 1 则宽度为 100，如果小于 1 则高度为 100，保证了不超过 100x100 的区域
//                             layoutSize: 100,
//                             label: {
//                                 normal: {
//                                     show: true,//显示省份标签
//                                 },
//                                 emphasis: {
//                                     show: true,//对应的鼠标悬浮效果
//                                 }
//                             },
                            itemStyle: {
                                opacity: 1, // 透明度
                                borderWidth: 1, //分界线宽度
                                borderColor: "#808080", //分界线颜色
                                color: "#ffffff"
                            },
                            emphasis: {
                                itemStyle: {
                                    color: "#D3D3D3"
                                },
                            },
                            boxDepth: 100, //地图倾斜度
                            regionHeight: 2, //地图厚度
                            light: {
                                main: {
                                    intensity: 1.5
                                }
                            },
                            label: {
                                show: true, //是否显示市
                                textStyle: {
                                    color: "#18b11c", //文字颜色
                                    fontSize: 16, //文字大小
                                    // fontFamily: '微软雅黑',
                                    // backgroundColor: "rgba(0,0,0,0)", //透明度0清空文字背景
                                },
                                emphasis: {
                                    show: true,//对应的鼠标悬浮效果
                                }
                            },
                            data: [
                                { name: '长丰县', value: 200 },
                                { name: '蜀山区', value: 154 },
                                { name: '肥西县', value: 316 },
                                { name: '庐江县', value: 699 },
                                { name: '包河区', value: 440 },
                                { name: '瑶海区', value: 406},
                                { name: '肥东县', value: 376},
                                { name: '巢湖市', value: 451},
                                { name: '庐阳区', value: 1451},
                            ],
                            // groundplane: {
                            //     show: false
                            // },
                            // shading: 'realistic',
                            // // 真实感材质相关配置 shading: 'realistic'时有效
                            // realisticMaterial: {
                            //     detailTexture: '#fff', // 纹理贴图
                            //     textureTiling: 1, // 纹理平铺，1是拉伸，数字表示纹理平铺次数
                            //     roughness: 0, // 材质粗糙度，0彻底光滑，1彻底粗糙
                            //     metalness: 0, // 0材质是非金属 ，1金属
                            //     roughnessAdjust: 0
                            // },
                            // viewControl: {
                            //     distance: 135, // 地图视角 控制初始大小
                            //     rotateSensitivity: 1, // 旋转
                            //     zoomSensitivity: 1, // 缩放
                            // },

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
