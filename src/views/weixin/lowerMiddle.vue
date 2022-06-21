<template>
    <div>
        <TimeConsumed :style="{ height: '38%'}"></TimeConsumed>
        <Study :style="{ height: '38%',margin:'1% 0 0 0'}"></Study>
        <div class="texts">
            <div>
                <h1>合作单位</h1>
            </div>
            <div>
                <h2 style="margin: 0px">柳州城市职业学院马克思学院</h2>
            </div>
            <div>
                <h2 style="margin: 0px">柳州城市职业学院体育部</h2>
            </div>
            <div>
                <h2 style="margin: 0px">柳州城市职业学院信息工程系</h2>
            </div>
        </div>
    </div>
</template>

<script>
    import TimeConsumed from '@/views/weixin/timeConsumed.vue'
    import Study from '@/views/weixin/study.vue'
    export default {
        name: "lowerMiddle",
        components: {
            TimeConsumed,
            Study,
        },
    }
</script>

<style lang="less" scoped>
    .texts{
        margin-top: 3%;
        height: 24%;
        color: #fff;
        font-size: 10px;

    }
</style>
