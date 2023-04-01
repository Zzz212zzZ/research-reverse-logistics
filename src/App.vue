<template>
  <Header />
  <Mainbox />
</template>



<script setup>
import Header from './components/header.vue'
import Mainbox from './components/mainbox.vue'


</script>


<style>

html {
    background: url(assets/images/bg.jpg) no-repeat top center;
    background-size: cover;
  }
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
}
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
  /* overflow: hidden; */
}

@font-face {
  font-family: electronicFont;
  src: url(assets/font/DS-DIGIT.TTF);
}

Header {
  display: flex;
  flex: 2;
}

Mainbox {
  display: flex;
  flex: 8;
}
</style>