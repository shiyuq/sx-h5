<template>
  <div class="home-peixun">
    <div class="title">
      <h2>公司新闻|行业动态</h2>
    </div>
     <!-- v-model="active"  -->
    <van-tabs type="card">
      <van-tab title="公司新闻">
        <div class="news">
        </div>
      </van-tab>
      <van-tab title="行业动态">
        <div class="action">
          <img src="./images/1.jpg" alt="" />
          <div class="detail">
            <h5>标题</h5>
            <p>正文</p>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
