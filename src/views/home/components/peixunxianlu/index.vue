<template>
  <div class="home-peixun">
    <div class="title">
      <h2>培训线路</h2>
      <p>PRODUCT</p>
    </div>
    <div class="fangan">
      <div v-for="(route, index) in routes" :key="index" class="route-container">
        <div class="route-single">
          <img :src="route.url" alt="" />
          <span>{{ route.name }}</span>
        </div>
      </div>
    </div>
    <div class="more" >查看更多线路>></div>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
