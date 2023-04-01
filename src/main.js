import { createApp } from 'vue'
import './util/flexible.js'
import ECharts from 'vue-echarts'
import 'echarts'


import App from './App.vue'



const app = createApp(App);
app.component('v-chart',ECharts)
app.mount('#app');



