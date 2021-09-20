<!-- peixunlueying -->
<template>
  <div class="home">
    <van-nav-bar  left-text="返回" @click-left="gotoMenu"   title="培训掠影" left-arrow>
      <template #right>
        <van-icon name="bars" size="18" />
      </template>
    </van-nav-bar>
    <div class="pic">
      <van-grid clickable :colum-num="2" :gutter="10" :icon-size="200">
        <van-grid-item text="培训掠影1" to="/">
          <van-image :src="require('./images/3.jpg')"></van-image>
        </van-grid-item>
        <van-grid-item text="培训掠影2">
          <van-image :src="require('./images/4.jpg')"></van-image>
        </van-grid-item>
      </van-grid>
      <van-grid clickable :colum-num="2" :gutter="10" :icon-size="200">
        <van-grid-item text="培训掠影3">
          <van-image :src="require('./images/3.jpg')"></van-image>
        </van-grid-item>
        <van-grid-item text="培训掠影4">
          <van-image :src="require('./images/4.jpg')"></van-image>
        </van-grid-item>
      </van-grid>
    </div>
    <van-pagination  class="paging" v-model="currentPage" :total-items="99" :show-page-size="5" force-ellipses/>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
