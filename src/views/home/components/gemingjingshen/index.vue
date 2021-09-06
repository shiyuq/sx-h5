<template>
  <div class="home">
    <div class="title">
      <h2><span>继承弘扬</span>革命精神</h2>
      <p>REVOLUTIONARY SPIRIT</p>
      <div class="redline"></div>
    </div>
    <van-swipe class="my-swipe" :loop="false" :show-indicators="false">
       <van-swipe-item><img src="./images/1.jpg" alt="" /></van-swipe-item>
       <van-swipe-item><img src="./images/2.jpg" alt="" /></van-swipe-item>
       <van-swipe-item><img src="./images/3.jpg" alt="" /></van-swipe-item>
       <van-swipe-item><img src="./images/4.jpg" alt="" /></van-swipe-item>
    </van-swipe>
    <!-- <div class="intro">
      <h5> 西柏坡精神 </h5>
      <p> 敢于斗争、敢于胜利的开拓进取精神；依靠群众和团结统一的民主精神；戒骄戒躁的谦虚精神、艰苦奋斗的创业精神。</p>
    </div> -->
    <ul class="intro">
      <li v-for="item in imgList" :key="item.id">
        <img :src="item.imgUrl" :alt="item.alt" width="221" height="155" />
        <h5>{{ item.title }}</h5>
        <p>{{ item.content }}</p>
      </li>
    </ul>
    <ul class="menu">
      <li
        v-for="(item, index) in titleList"
        :key="index"
        :class="{ cur: iscur === index }"
        @mouseover="setIscur(index)"
        @mouseenter="setAutoplay()"
        @mouseleave="changeAutoplay()"
      >
        <img src="./images/arrow.png" alt="" />
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
