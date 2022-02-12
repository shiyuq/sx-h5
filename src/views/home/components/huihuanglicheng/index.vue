<template>
  <div class="home">
    <div class="title">
      <!-- <p>不忘初心，牢记使命</p> -->
      <h2>辉煌历程</h2>
      <p>GLORIOUS HISTORY</p>
      <div class="redline"></div>
    </div>
    <van-swipe @change="change" ref="swipe" class="my-swipe" :loop="false" :show-indicators="false">
      <van-swipe-item v-for="(item, index) in titleList" :key="index">
        <!-- <img :src="item.imgUrl" :alt="item.alt" width="324" height="207" /> -->
        <div class="intro">
          <h5>{{ item.title }}</h5>
          <p>{{ item.content }}</p>
        </div>
      </van-swipe-item>
    </van-swipe>
    <ul class="menu">
      <li
        v-for="(item, index) in titleList"
        :key="index"
        :class="{ cur: iscur === index }"
        @mouseover="setIscur(index)"
        @mouserenter="setAutoplay()"
        @mouserleave="changeAutoplay()"
      >
        <img src="./images/arrow.png" alt="" />
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
