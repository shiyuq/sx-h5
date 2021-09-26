<template>
  <div class="home-peixun">
    <div class="title">
      <h2>培训线路</h2>
      <p>PRODUCT</p>
    </div>
    <div class="fangan">
      <van-row type="flex" justify="space-between">
        <van-col span="10">
          <img :src="require('./images/fangan1.jpg')"/>
        </van-col>
        <van-col span="10" offset="4">
          <img :src="require('./images/fangan2.jpg')"/>
        </van-col>
      </van-row>
      <van-row type="flex" justify="space-around">
        <van-col span="10">
          <img :src="require('./images/fangan3.jpg')"/>
        </van-col>
        <van-col span="10">
          <img :src="require('./images/fangan4.jpg')"/>
        </van-col>
      </van-row>
      <!-- <van-grid clickable :colum-num="2">
        <van-grid-item text="方案1" to="/">
          <van-image :src="require('./images/fangan1.jpg')"></van-image>
        </van-grid-item>
        <van-grid-item text="方案2">
          <van-image :src="require('./images/fangan2.jpg')"></van-image>
        </van-grid-item>
      </van-grid>
      <van-grid clickable :colum-num="2">
        <van-grid-item text="方案3">
          <van-image :src="require('./images/fangan3.jpg')"></van-image>
        </van-grid-item>
        <van-grid-item text="方案4">
          <van-image :src="require('./images/fangan4.jpg')"></van-image>
        </van-grid-item>
      </van-grid> -->
    </div>
    <div class="more">查看更多线路>></div>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
