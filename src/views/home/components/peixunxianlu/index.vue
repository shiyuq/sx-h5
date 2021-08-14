<template>
  <div class="home-peixun">
    <div class="title">
      <h2>培训线路</h2>
      <p>PRODUCT</p>
    </div>
    <div class="more">查看更多线路>></div>
    <div class="fangan">
      <van-grid :colum-num="2" :gutter="10" :icon-size="200">
        <van-grid-item text="方案">
          <van-image :src="require('./images/fangan1.jpg')"></van-image>
        </van-grid-item>
        <van-grid-item text="fangan2">
          <van-image :src="require('./images/fangan2.jpg')"></van-image>
        </van-grid-item>
      </van-grid>
      <van-grid :colum-num="2" :gutter="10" :icon-size="200">
        <van-grid-item text="fangan3">
          <van-image :src="require('./images/fangan3.jpg')"></van-image>
        </van-grid-item>
        <van-grid-item text="fangan4">
          <van-image :src="require('./images/fangan4.jpg')"></van-image>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
