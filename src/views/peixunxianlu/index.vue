<template>
  <div class="home-peixun">
    <van-nav-bar  left-text="返回" title="培训线路" left-arrow>
      <template #right>
        <van-icon name="bars" size="18" />
      </template>
    </van-nav-bar>
    <div class="fangan">
      <van-grid clickable :colum-num="2" :gutter="10" :icon-size="200">
        <van-grid-item text="方案" to="/">
          <van-image :src="require('./images/fangan1.jpg')"></van-image>
        </van-grid-item>
        <van-grid-item text="fangan2">
          <van-image :src="require('./images/fangan2.jpg')"></van-image>
        </van-grid-item>
      </van-grid>
      <van-grid clickable :colum-num="2" :gutter="10" :icon-size="200">
        <van-grid-item text="fangan3">
          <van-image :src="require('./images/fangan3.jpg')"></van-image>
        </van-grid-item>
        <van-grid-item text="fangan4">
          <van-image :src="require('./images/fangan4.jpg')"></van-image>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="more">查看更多线路>></div>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
