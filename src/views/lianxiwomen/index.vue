<!-- home -->
<template>
  <div class="home-lianxiwomen">
    <van-nav-bar left-text="返回" @click-left="gotoMenu" title="联系我们" left-arrow>
      <template #right>
        <van-icon name="bars" size="18" />
      </template>
    </van-nav-bar>
    <div class="lianxi">
      <img class="icon" :src="require('./images/address.png')" />
      地址：新疆阿拉尔市秋收大道1001号
    </div>
    <div class="lianxi">
      <img class="icon" :src="require('./images/tele.png')" />
      电话： 0991-6378522 15083931223
    </div>
    <div class="lianxi">
      <img class="icon" :src="require('./images/mail.png')" />
      邮箱：364361414@qq.com
    </div>
    <div class="navigation">
      <a href="https://www.amap.com/place/B0FFH0DMU6">
        <img src="./images/map.jpg" />
        <br />
        <span>立即导航</span>
      </a>
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
