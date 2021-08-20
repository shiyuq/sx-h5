<!-- home -->
<template>
  <div class="about-container">
    <van-nav-bar  left-text="返回" title="培训线路" left-arrow>
      <template #right>
        <van-icon name="bars" size="18" />
      </template>
    </van-nav-bar>
    <div class="warpper">
      <div class="list">
        <div class="logo"></div>
        <div class="demo-home__title">VUE H5开发模板</div>
        <div class="item">
          项目地址:
          <a href="https://github.com/sunniejs/vue-h5-template">https://github.com/sunniejs/vue-h5-template</a>
        </div>
        <div class="item">项目作者: sunnie</div>
        <div class="item"></div>
        <div class="wechat">
          <img :src="this.wechat" alt="" />
        </div>
        <div class="item">关注公众号：回复“加群”即可加 前端仙女群</div>
        <div class="item">
          {{ userName }}
          <van-button v-if="userName == ''" type="warning" size="small" @click="doDispatch">快点我~</van-button>
        </div>
      </div>
    </div>
    <van-pagination  class="paging" v-model="currentPage" :total-items="99" :show-page-size="5" force-ellipses/>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
