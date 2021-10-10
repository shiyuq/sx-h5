<!-- peixunlueying -->
<template>
  <div class="home">
    <van-nav-bar  left-text="返回" @click-left="gotoMenu" title="培训掠影" left-arrow/>
    <div>
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="loadMore" class="lueying-container">
        <div v-for="(route, index) in routes" :key="index" class="lueying-container">
          <router-link :to="'/peixunlueying/' + lueying.id" :title="培训掠影">
            <div class="lueying-single">
              <img :src="route.cameraPhotoUrl" alt="" />
              <span>培训掠影</span>
            </div>
          </router-link>
        </div>
      </van-list>
    </div>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
