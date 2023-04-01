<template>
    <div id="header">
        <h1> 基于逆向物流数据挖掘可视化分析系统</h1>
        <div class="showTime">{{ currentTime }}</div>
    </div>
</template>
  
  
  
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const currentTime = ref('');

const updateTime = () => {
    const dt = new Date();
    const y = dt.getFullYear();
    const mt = dt.getMonth() + 1;
    const day = dt.getDate();
    const h = dt.getHours();
    const m = dt.getMinutes();
    const s = dt.getSeconds();
    currentTime.value = `当前时间：${y}年${mt}月${day}日-${h}时${m}分${s}秒`;
};

let timer;
onMounted(() => {
    timer = setInterval(updateTime, 1000);
});

onUnmounted(() => {
    clearInterval(timer);
});
</script>

  
<style>
#header {
    position: relative;
    /* height: 1.25rem; */
    background: url(../assets/images/head_bg.png) no-repeat;
    background-size: 100% 100%;
}

#header h1 {
    font-size: 0.475rem;
    color: white;
    text-align: center;
    line-height: 1rem;
}

#header .showTime {
    top: 0;
    position: absolute;
    right: 0.375rem;
    line-height: 0.9375rem;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.25rem;
}
</style>
  
  
  