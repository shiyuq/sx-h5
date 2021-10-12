<template>
  <div>
    <van-tabbar fixed v-model="active" @change="handleChange" active-color="#ee0a24">
      <van-tabbar-item v-for="(item, index) in data" :to="item.to" :icon="item.icon" :key="index">
        {{ item.title }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
