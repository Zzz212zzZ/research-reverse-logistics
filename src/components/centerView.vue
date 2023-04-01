<template>
    <div class="no">
        <div class="no-hd">
            <ul>
                <li>{{firstValue}}</li>
                <li>{{secondValue}}</li>
            </ul>
        </div>
        <div class="no-bd">
            <ul>
                <li>本周累积回收总量</li>
                <li>上周回收统计总量</li>
            </ul>
        </div>
    </div>
    <div class="map">
        <Chart class="chart" :option="option"  @update:last-province="handleLastProvinceUpdate"/>
        <div class="map1"></div>
        <div class="map2"></div>
        <div class="map3"></div>
    </div>
</template>


<script setup>

import {ref,onMounted,watch} from 'vue';
import Chart from './chart.vue';

const props = defineProps({
    data:Array,
    option: {
    type: Object,
    default: () => ({})
  },
})


const emits = defineEmits(['update:last-province']);
function handleLastProvinceUpdate(provinceName) {
  console.log('CenterView received last province:', provinceName);
  emits('update:last-province', provinceName);
}






const firstValue = ref(9999);
const secondValue = ref(10234);

const updateValues = () =>{
    // secondValue.value += Math.floor(Math.random() * 100)
    firstValue.value += Math.floor(Math.random() * 6);
    setTimeout(updateValues,3000);
}

onMounted(() =>{
    updateValues();
})

</script>


<style lang="less">

li {
  list-style: none;
}

.no {
    background: rgba(101, 132, 226, 0.1);
    padding: 0.1875rem;
    display: flex;
    flex-direction: column;
    flex: 1;

    .no-hd {
        position: relative;
        border: 1px solid rgba(25, 186, 139, 0.17);

        &::before {
            content: "";
            position: absolute;
            width: 30px;
            height: 10px;
            border-top: 2px solid #02a6b5;
            border-left: 2px solid #02a6b5;
            top: 0;
            left: 0;
        }

        &::after {
            content: "";
            position: absolute;
            width: 30px;
            height: 10px;
            border-bottom: 2px solid #02a6b5;
            border-right: 2px solid #02a6b5;
            right: 0;
            bottom: 0;
        }

        ul {
            display: flex;

            li {
                position: relative;
                flex: 1;
                text-align: center;
                height: 1rem;
                line-height: 1rem;
                font-size: 0.875rem;
                color: #ffeb7b;
                padding: 0.05rem 0;
                font-family: electronicFont;
                font-weight: bold;

                &:first-child::after {
                    content: "";
                    position: absolute;
                    height: 50%;
                    width: 1px;
                    background: rgba(255, 255, 255, 0.2);
                    right: 0;
                    top: 25%;
                }
            }
        }
    }

    .no-bd ul {
        display: flex;

        li {
            flex: 1;
            height: 0.5rem;
            line-height: 0.5rem;
            text-align: center;
            font-size: 0.225rem;
            color: rgba(255, 255, 255, 0.7);
            padding-top: 0.125rem;
        }
    }
}


.map {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 9;
  overflow: hidden;

  .chart {
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    z-index: 5;
    width: 100%;
    height: 85%;
  //   width: 800px;
  //  height: 600px;     
  }

  .map1,
  .map2,
  .map3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%; /* 相对于父元素的宽度 */
    padding-top: 60%; /* 相对于父元素的高度，并使用padding来保持宽高相等 */
    background: url(../assets/images/map.png) no-repeat;
    background-size: 100% 100%;
    opacity: 0.3;
  }

  .map2 {
    // width: 12%; /* 相对于父元素的宽度 */
    // padding-top: 12%; /* 相对于父元素的高度，并使用padding来保持宽高相等 */
    background-image: url(../assets/images/lbx.png);
    opacity: 0.6;
    animation: rotate 15s linear infinite;
    z-index: 2;
  }

  .map3 {
    width: 65%; /* 相对于父元素的宽度 */
    padding-top: 65%; /* 相对于父元素的高度，并使用padding来保持宽高相等 */
    background-image: url(../assets/images/jt.png);
    animation: rotate1 10s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }

    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  @keyframes rotate1 {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }

    to {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }
}

</style>