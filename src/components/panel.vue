<template>
  <div class="panel">
    <div class="panel-header">
      <h1>{{provinceLabel}} - {{chartType}}</h1>
    </div>


    <div class="panel-footer">
      <Chart :data="data" :option="option" />
    </div>
  </div>
</template>


<script setup>
import Chart from './chart.vue';
const props = defineProps({
  data: Array,
  option: Object,
  provinceLabel: {
    type: String,
    default: '重庆',
  },
  chartType:{
    type:String,
    default:'统计图',
  }
})

</script>






<style lang="less">
.panel {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid rgba(25, 186, 139, 0.17);
  background: url(../assets/images/line.png);
  margin-bottom: 0.5rem;

  .panel-header {
    height: 10%;

    h1 {
      height: .6rem;
      color: #fff;
      line-height: .6rem;
      text-align: center;
      font-size: 0.28rem;
      font-weight: 550;
    }
  }

  .panel-footer {
    height: 90%;

    Chart {
      height: 100%;
      width: 100%;
    }
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border-left: 2px solid #02a6b5;
    border-top: 2px solid #02a6b5;
    content: "";
  }

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    width: 10px;
    height: 10px;
    border-right: 2px solid #02a6b5;
    border-top: 2px solid #02a6b5;
    content: "";
  }

  .panel-footer {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;

    &::before {
      position: absolute;
      bottom: 0;
      left: 0;
      content: "";
      width: 10px;
      height: 10px;
      border-bottom: 2px solid #02a6b5;
      border-left: 2px solid #02a6b5;
    }

    &::after {
      position: absolute;
      bottom: 0;
      right: 0;
      content: "";
      width: 10px;
      height: 10px;
      border-bottom: 2px solid #02a6b5;
      border-right: 2px solid #02a6b5;
    }
  }

}
</style>