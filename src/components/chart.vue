<template>
    <v-chart class="chart" :option="chartOption" :data="data" :autoresize="true" @click="onMouseClick" />
</template>


<script setup>
import { computed,ref} from 'vue'

// const emit = defineEmit(['update:last-province'])


const props = defineProps({
  data: {
    type: Array,
    default: () => ([
      { value: 50, name: "a" },
      { value: 70, name: "b" },
      { value: 90, name: "c" },
      { value: 20, name: "d" },
      { value: 100, name: "e" },
    ])
  },
  option: {
    type: Object,
    default: () => ({})
  },

});

const emits = defineEmits(['update:last-province']);

const lastProvince = ref(null);


function onMouseClick(params) {
  // console.log(params)
  if (params.componentType === 'geo') {
    const provinceName = params.name;
    if (lastProvince.value !== provinceName) {
      console.log('Province changed:', provinceName);
      lastProvince.value = provinceName;
      emits('update:last-province', provinceName);
    }
  }
}


const chartOption = computed(() => {
  const defaultOption= {
    xAxis: {
      type: "category",
      data: props.data.map((d) => d.name),
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: props.data.map((d) => d.value),
        type: "line",
      },
    ],
  };
  return Object.keys(props.option).length > 0 ? props.option : defaultOption;
});


</script>

<style>
.chart {
  width: 100%;
  min-height: 80%;
  max-height: 100%;
}

</style>
