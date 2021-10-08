<!-- rongyuzizhi -->
<template>
  <div class="home">
    <van-nav-bar  left-text="返回" @click-left="gotoMenu" title="荣誉资质" left-arrow>
    </van-nav-bar>
    <div class="pic">
      <div v-for="(rongyu, index) in rongyu" :key="index" class="rongyu-container">
        <router-link :to="rongyu.src" :title="rongyu.title">
        <div class="rongyu-single">
          <img :src="rongyu.url" alt="" />
          <span>{{ rongyu.title }}</span>
        </div>
        </router-link>
      </div>
    </div>
   ·<van-pagination v-model="currentPage" :page-count="4" mode="simple" />
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
