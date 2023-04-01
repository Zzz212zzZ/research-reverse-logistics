<template>
  <div class="mainbox">


    <div class="column-left column">
      <Panel class="left-1" :option="option_left_1_reactive" :provinceLabel="provinceLabel" :chartType="type_left_1" />
      <Panel class="left-2" :option="option_left_2_reactive" :provinceLabel="provinceLabel" :chartType="type_left_2" />
    </div>

    <div class="column-center column">
      <CenterView :option="mapOption" @update:last-province="handleLastProvinceUpdate" />
    </div>


    <div class="column-right column">
      <Panel class="right-1" :option="option_right_1_reactive" :provinceLabel="provinceLabel" :chartType="type_left_3" />
      <Panel class="right-2" :option="option_right_2_reactive" :provinceLabel="provinceLabel" :chartType="type_left_4" />
    </div>

  </div>
</template>
  

<script setup>
import { ref, reactive } from 'vue'
import Panel from './panel.vue'
import CenterView from './centerView.vue'


import { mapOption } from '../util/myMap.js';
import { option_left_1, option_left_2, generateData_left_2, option_right_1, generateData_right_1, option_right_2, generateData_right_2 } from '../util/chartConfigs.js';


const provinceLabel = ref('重庆');
const type_left_1 = '多指标评价';
const type_left_2 = '营业总额区间预测(万元)';
const type_left_3 = '本周家电回收预测';
const type_left_4 = '常用家电回收价格统计(昨日)';

// const option_left_1_reactive = reactive(option_left_1);
const option_left_1_reactive = reactive(option_left_1);
const option_left_2_reactive = reactive(option_left_2);
const option_right_1_reactive = reactive(option_right_1);
const option_right_2_reactive = reactive(option_right_2);


function handleLastProvinceUpdate(provinceName) {
  console.log('Mainbox Last province:', provinceName)
  // 处理 lastProvince 的变化
  provinceLabel.value = provinceName;
  change_left_1()
  change_left_2()
  change_right_1()
  change_right_2()

}





function change_left_1() {
  // 这是改变一个雷达图的值
  const indicators = option_left_1_reactive.radar.indicator;
  const standard=option_left_1_reactive.series[0].data[0].value;

  option_left_1_reactive.series[0].data[0].value.forEach((valueItem, valueIndex) => {

        valueItem += Math.random()*30-13 ;
        valueItem = Math.max(50, valueItem); // 确保值不小于 0.1*max
        valueItem = Math.min(98, valueItem); // 确保值不超过对应指标的最大值*0.95
        option_left_1_reactive.series[0].data[1].value[valueIndex] = valueItem;
      })


  console.log(option_left_1_reactive.series.data)

}

function change_left_2() {
  const { category, lineData, barData } = generateData_left_2();
  // console.log(category, lineData, barData)
  option_left_2_reactive.series[0].data = lineData;
  option_left_2_reactive.series[1].data = barData;
  option_left_2_reactive.series[2].data = lineData;
  option_left_2_reactive.series[3].data = lineData;

}


function change_right_1() {

  const categories = generateData_right_1();
  console.log(categories)
  let series = option_right_1_reactive.series;
  series.forEach((item, index) => {
    item.data = categories[item.name];
  });
}


function change_right_2() {

  const { realDict, predictDict } = generateData_right_2();
  const right_2_realDict = realDict;
  const right_2_predictDict = predictDict;
  option_right_2_reactive.yAxis.data = Object.keys(right_2_realDict)
  option_right_2_reactive.series[0].data = Object.values(right_2_predictDict);
  option_right_2_reactive.series[1].data = Object.values(right_2_realDict);
}


</script>




<style lang="less">
.column {
  margin: 0 0.5rem 0 0;
}

.mainbox {
  display: flex;
  height: 100%;
  width: 100%;
  line-height: 1.15;
}

.column-left {
  flex: 2.5;
  display: flex;
  flex-direction: column;

  // margin: 0 0.5rem 0 0;
  .left-1 {
    display: flex;
    flex: 1;
  }

  .left-2 {
    display: flex;
    flex: 1;
  }
}


.column-center {
  flex: 4;
  display: flex;
  flex-direction: column;
  margin: 0;
}


.column-right {
  flex: 2.5;
  display: flex;
  flex-direction: column;
  margin: 0 0 0 0.5rem;

  .right-1 {
    display: flex;
    flex: 1;
  }

  .right-2 {
    display: flex;
    flex: 1;

  }
}
</style>
  