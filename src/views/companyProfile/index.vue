<!-- home -->
<template>
  <div class="home-qiyefengcai">
    <van-nav-bar left-text="返回" @click-left="gotoMenu" title="关于我们" left-arrow>
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
    <!-- <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      ></van-search>
    </form> -->
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
