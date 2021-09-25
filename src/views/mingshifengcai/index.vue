<!-- guanyuwomen -->
<template>
  <div class="home">
    <van-nav-bar  left-text="返回" @click-left="gotoMenu" title="名师风采" left-arrow>
    </van-nav-bar>
    <div class="pic">
      <van-grid clickable :colum-num="2" :gutter="10" :icon-size="200">
        <van-grid-item text="名师1" to="/">
          <van-image :src="require('./images/1.jpg')"></van-image>
        </van-grid-item>
        <van-grid-item text="名师2">
          <van-image :src="require('./images/1.jpg')"></van-image>
        </van-grid-item>
      </van-grid>
      <van-grid clickable :colum-num="2" :gutter="10" :icon-size="200">
        <van-grid-item text="名师3">
          <van-image :src="require('./images/1.jpg')"></van-image>
        </van-grid-item>
        <van-grid-item text="名师4">
          <van-image :src="require('./images/1.jpg')"></van-image>
        </van-grid-item>
      </van-grid>
    </div>
    <van-pagination  class="paging" v-model="currentPage" :total-items="99" :show-page-size="5" force-ellipses/>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
