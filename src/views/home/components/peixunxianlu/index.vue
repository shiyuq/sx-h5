<template>
  <div class="home-peixun">
    <div class="title">
      <h2>培训线路</h2>
      <p>PRODUCT</p>
      <div class="redline"></div>
    </div>
    <div class="fangan">
      <div v-for="(route, index) in routes" :key="index" class="route-container">
        <router-link :to="'/peixunxianlu/' + route.id">
          <div class="route-single">
            <img :src="route.trainPhotoUrl" alt="" />
            <span>{{ route.title }}</span>
          </div>
        </router-link>
      </div>
    </div>
    <div class="more">
      <router-link to="/peixunxianlu">查看更多线路>></router-link>
    </div>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
