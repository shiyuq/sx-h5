<!-- guanyuwomen -->
<template>
  <div class="home">
    <van-nav-bar  left-text="返回" :to="'home'" title="荣誉资质" left-arrow>
    </van-nav-bar>
    <div class="pic">
      <van-grid clickable :colum-num="2" :gutter="10" :icon-size="200">
        <van-grid-item text="荣誉1" to="/">
          <van-image :src="require('./images/1.jpg')"></van-image>
        </van-grid-item>
        <van-grid-item text="荣誉2">
          <van-image :src="require('./images/1.jpg')"></van-image>
        </van-grid-item>
      </van-grid>
      <van-grid clickable :colum-num="2" :gutter="10" :icon-size="200">
        <van-grid-item text="荣誉3">
          <van-image :src="require('./images/1.jpg')"></van-image>
        </van-grid-item>
        <van-grid-item text="荣誉4">
          <van-image :src="require('./images/1.jpg')"></van-image>
        </van-grid-item>
      </van-grid>
    </div>
   ·<van-pagination v-model="currentPage" :page-count="4" mode="simple" />
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
