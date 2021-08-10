<template>
  <div class="home">
    <div class="home-swipe">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :show-indicators="false" @change="changeTab">
        <van-swipe-item><img src="./images/1.jpg" alt="" /></van-swipe-item>
        <van-swipe-item><img src="./images/2.jpg" alt="" /></van-swipe-item>
        <van-swipe-item><img src="./images/3.jpg" alt="" /></van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
