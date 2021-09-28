<!-- peixunxianlu -->
<template>
  <div class="home-peixun">
    <van-nav-bar  left-text="返回" @click-left="gotoMenu"  title="培训线路" left-arrow>
      <template #right>
        <van-icon name="bars" size="18" />
      </template>
    </van-nav-bar>
    <div class="fangan">
        <div v-for="(route, index) in routes" :key="index" class="route-container">
        <div class="route-single">
          <img :src="route.url" alt="" />
          <span>{{ route.name }}</span>
        </div>
      </div>
    </div>
    <van-pagination  class="paging" v-model="currentPage" :total-items="99" :show-page-size="5" force-ellipses/>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
