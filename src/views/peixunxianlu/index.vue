<!-- peixunxianlu -->
<template>
  <div class="home-peixun">
    <van-nav-bar left-text="返回" @click-left="gotoMenu" title="培训线路" left-arrow/>
    <div>
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="loadMore" class="fangan">
        <div v-for="(route, index) in routes" :key="index" class="route-container">
          <router-link :to="'/peixunxianlu/' + route.id" :title="route.title">
            <div class="route-single">
              <img :src="route.trainPhotoUrl" alt="" />
              <span>{{ route.title }}</span>
            </div>
          </router-link>
        </div>
      </van-list>
    </div>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
