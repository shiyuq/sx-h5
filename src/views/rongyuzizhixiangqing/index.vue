<!-- rongyuzizhixiangq -->
<template>
  <div class="home">
    <van-nav-bar left-text="返回" @click-left="gotoMenu" title="荣誉资质" left-arrow> </van-nav-bar>
    <div class="content">
      <div class="title">荣誉证书1</div>
      <img :src="require('./images/1.jpg')" />
    </div>
    <div class="zixun">相关资讯</div>
    <div class="tuijian">推荐线路</div>
    <!-- ·<van-pagination v-model="currentPage" :page-count="4" mode="simple" /> -->
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
