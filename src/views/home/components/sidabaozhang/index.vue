<template>
  <div class="home-baozhang">
    <div class="title">
      <h2>四大保障<span>优选平台</span></h2>
      <p>FOUR GUARANTEES</p>
    </div>
    <van-swipe @change="change" ref="remarkCarusel" class="my-swipe" :loop="false" :show-indicators="false" :autoplay="3000">
       <van-swipe-item v-for="(item,index) in imgList" :key="index">
         <img :src="item.imgUrl" :alt="item.alt" />
         <div class="intro">
          <h5>{{item.title}} </h5>
          <p> {{item.content}}</p>
        </div>
       </van-swipe-item>
    </van-swipe>
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
