<template>
  <div class="home-swipe">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :show-indicators="false" @change="changeTab">
      <van-swipe-item><img src="./images/bg1.jpg" alt="" /></van-swipe-item>
      <van-swipe-item><img src="./images/bg2.jpg" alt="" /></van-swipe-item>
      <van-swipe-item><img src="./images/bg3.jpg" alt="" /></van-swipe-item>
    </van-swipe>
    <div class="indicator">
      <span v-for="(item, index) in 3" :key="index" :class="index === currentIndex ? 'on' : ''"></span>
    </div>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
