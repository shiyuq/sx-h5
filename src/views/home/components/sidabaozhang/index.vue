<template>
  <div class="home-baozhang">
    <div class="title">
      <h2>四大保障<span>优选平台</span></h2>
      <p>FOUR GUARANTEES</p>
    </div>
    <van-image fit="contain" :src="require('./images/3.jpg')"/>
    <van-swipe class="my-swipe" :loop="false" :show-indicators="false">
      <!-- <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="images" />
      </van-swipe-item> -->
       <van-swipe-item><img src="./images/3-1.jpg" alt="" /></van-swipe-item>
       <van-swipe-item><img src="./images/3-2.jpg" alt="" /></van-swipe-item>
       <van-swipe-item><img src="./images/3-3.jpg" alt="" /></van-swipe-item>
       <van-swipe-item><img src="./images/3-4.jpg" alt="" /></van-swipe-item>
    </van-swipe>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
