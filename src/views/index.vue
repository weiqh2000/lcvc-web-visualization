<template>
   <div>
       <el-row :gutter="24">
           <el-col :span="24"><div class="grid-content bg-purple">
               <Heads></Heads>
           </div></el-col>
       </el-row>
       <el-row :gutter="20">
           <el-col :span="7"><div class="grid-content bg-purple">
               <div  :style="{width: '100%', height: '210px'}">
                   <Circular></Circular>
               </div>
               <div :style="{width: '100%', height: '210px'}">
                   <Region></Region>
               </div>
           </div></el-col>
           <el-col :span="10"><div class="grid-content bg-purple">
               <div  :style="{width: '100%', height: '420px'}">
                   <Maps></Maps>
               </div>
           </div></el-col>
           <el-col :span="7"><div class="grid-content bg-purple">
               <div  :style="{width: '100%', height: '210px'}">
                   <Frequency></Frequency>
               </div>
               <div :style="{width: '100%', height: '210px'}">
                   <Today></Today>
               </div>
           </div></el-col>
       </el-row>
       <el-row :gutter="20">
           <el-col :span="7"><div class="grid-content bg-purple">
               <div :style="{width: '100%', height: '230px'}">
                   <Plicesituation></Plicesituation>
               </div>
           </div></el-col>
           <el-col :span="10"><div class="grid-content bg-purple">
               <div  :style="{width: '100%', height: '230px'}">
                   <Quantity></Quantity>
               </div>
           </div></el-col>
           <el-col :span="7"><div class="grid-content bg-purple">
               <div  :style="{width: '100%', height: '230px'}">
                   <Casualties></Casualties>
               </div>
           </div></el-col>
       </el-row>
   </div>
</template>

<script>
    import Heads from '@/views/head.vue'
    import Circular from '@/views/circular.vue'
    import Region from '@/views/region.vue'
    import Casualties from '@/views/casualties.vue'
    import Plicesituation from '@/views/policesituation.vue'
    import Quantity from '@/views/quantity.vue'
    import Today from '@/views/today.vue'
    import Frequency from '@/views/frequency.vue'
    import Maps from '@/views/map.vue'
    export default {
        name: "index",
        components: {
            Heads,
            Circular,
            Region,
            Casualties,
            Plicesituation,
            Quantity,
            Today,
            Frequency,
            Maps,
        },
        data() {
            return {

            }
        },
        mounted() {
        },
        methods: {

        }
    }
</script>

<style  lang="less" scoped>
    .el-row {
        margin-bottom: 20px;
    &:last-child {
         margin-bottom: 0;
     }
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        /*background-color: transparent!important;*/
    }
    .bg-purple {
        /*background-color: transparent!important;*/
    }
    .bg-purple-light {
        /*background-color: transparent!important;*/
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        /*background-color: transparent!important;*/
    }
</style>
