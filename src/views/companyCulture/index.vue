<!-- home -->
<template>
  <div class="home-qiyewenhua">
    <van-nav-bar left-text="返回" @click-left="gotoMenu" title="关于我们" left-arrow>
      <template #right>
        <van-icon name="bars" size="18" />
      </template>
    </van-nav-bar>
    <div class="content">
      <!-- 只有在 css 里面 才会用到 require，因为用不了相对路径 ./  -->
      <img src="./images/1.jpg" />
      <div class="zhengwen">践行三五九旅精神</div>
      <div class="zhengwen">胡杨精神和兵团精神</div>
      <div class="zhengwen">传承红色基因</div>
      <div class="zhengwen">赓续红色血脉</div>
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
