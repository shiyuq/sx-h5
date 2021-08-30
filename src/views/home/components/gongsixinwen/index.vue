<template>
  <div class="home-peixun">
    <div class="title">
      <h2>公司新闻|行业动态</h2>
    </div>
    <van-tabs v-model="active" type="card">
      <van-tab title="公司新闻">
        <div class="news">内容一</div>
      </van-tab>
      <van-tab title="行业动态">
        <div class="action">内容二</div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
