<!-- peixunlueying -->
<template>
  <div class="home">
    <van-nav-bar  left-text="返回" @click-left="gotoMenu" title="培训掠影" left-arrow>
      <template #right>
        <van-icon name="bars" size="18" />
      </template>
    </van-nav-bar>
    <div class="pic">
       <div v-for="(lueying, index) in lueying" :key="index" class="lueying-container">
        <router-link :to="lueying.src" :title="lueying.name">
        <div class="lueying-single">
          <img :src="lueying.url" alt="" />
          <span>{{ lueying.name }}</span>
        </div>
        </router-link>
      </div>
    </div>
    <van-pagination  class="paging" v-model="currentPage" :total-items="99" :show-page-size="5" force-ellipses/>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
