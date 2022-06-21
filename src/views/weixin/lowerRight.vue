<template>
    <div>
        <StepRank :style="{ height: '49%'}"></StepRank>
        <EachFloor :style="{ height: '49%',margin:'2% 0 0 0'}"></EachFloor>
    </div>
</template>

<script>
    import StepRank from '@/views/weixin/stepRank.vue'
    import EachFloor from '@/views/weixin/eachFloor.vue'
    export default {
        name: "lowerRight",
        components: {
            StepRank,
            EachFloor,
        },
    }
</script>

<style scoped>

</style>
