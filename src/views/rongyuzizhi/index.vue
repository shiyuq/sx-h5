<!-- rongyuzizhi -->
<template>
  <div class="home">
    <van-nav-bar left-text="返回" @click-left="gotoMenu" title="荣誉资质" left-arrow> </van-nav-bar>
    <div>
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="loadMore" class="photo">
        <div v-for="(route, index) in routes" :key="index" class="rongyu-container">
          <router-link :to="'/rongyuzizhi/' + route.id">
            <div class="rongyu-single">
              <img :src="route.certificatePhotoUrl" alt="" />
              <span>荣誉资质</span>
            </div>
          </router-link>
        </div>
      </van-list>
    </div>
    <!-- <van-pagination v-model="currentPage" :page-count="4" mode="simple" /> -->
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
