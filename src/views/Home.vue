<template>
  <div class="home">
    <el-row>
      <el-col :span="24">
        <Tops></Tops>
      </el-col>
    </el-row>
    <el-row :gutter="10" >
      <el-col :span="7"><div>
        <TotalSteps :style="{ height: '250px'}"></TotalSteps>
      </div></el-col>
      <el-col :span="10"><div>
        <VisitorFlow :style="{ height: '250px'}"></VisitorFlow>
      </div></el-col>
      <el-col :span="7"><div>
        <TotalConsumption :style="{ height: '250px'}"></TotalConsumption>
      </div></el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="7">
        <CurrentRanking :style="{ height: '450px'}"></CurrentRanking>
      </el-col>
      <el-col :span="10">
      <lowerMiddle :style="{ height: '450px'}"></lowerMiddle>
      </el-col>
      <el-col :span="7">
        <LowerRight :style="{ height: '450px'}"></LowerRight>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Tops from '@/views/weixin/top.vue'
  import TotalSteps from '@/views/weixin/totalSteps.vue'
  import VisitorFlow from '@/views/weixin/visitorFlow.vue'
  import TotalConsumption from '@/views/weixin/totalConsumption.vue'
  import CurrentRanking from '@/views/weixin/currentRanking.vue'
  import LowerRight from '@/views/weixin/lowerRight.vue'
  import lowerMiddle from '@/views/weixin/lowerMiddle.vue'
export default {
  name: 'Home',
  components: {
    Tops,
    TotalSteps,
    VisitorFlow,
    TotalConsumption,
    CurrentRanking,
    LowerRight,
    lowerMiddle,
  },
}
</script>
<style lang="less" scope>
  body{
    padding: 0;
    margin: 0;
  }
  .home{
    color: white;
    font-size: 10px;
    width: 99%;
    height: 100vh;
    background: url("../assets/imgae/BG@2x.png") no-repeat;
    background-position: center center;
    background-size: 100% 100%;
    /*background-size: 110px 110px;*/
  }
  .el-row {
    margin-bottom: 5px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .row-bg {
    /*padding: 10px 0;*/
    background-color: #f9fafc;
  }
</style>
