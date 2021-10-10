<!-- home -->
<template>
  <div class="home-qiyewenhua">
    <van-nav-bar left-text="返回" @click-left="gotoMenu" title="关于我们" left-arrow>
      <template #right>
        <van-icon name="bars" size="18" />
      </template>
    </van-nav-bar>
    <div class="content">
      <img :src="require('./images/1.jpg')" />
      <div class="zhengwen">不忘初心</div>
      <div class="zhengwen">牢记使命</div>
      <div class="zhengwen">传承红色基因</div>
      <div class="zhengwen">弘扬三五九旅精神</div>
    </div>
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      ></van-search>
    </form>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
