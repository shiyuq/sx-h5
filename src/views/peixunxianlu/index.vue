<template>
  <div class="home-peixun">
    <van-nav-bar  left-text="返回" @click-left="gotoMenu"  title="培训线路" left-arrow>
      <template #right>
        <van-icon name="bars" size="18" />
      </template>
    </van-nav-bar>
    <div class="fangan">
       <van-grid clickable :colum-num="2">
        <van-grid-item text="方案1" to="/">
          <van-image :src="require('./images/fangan1.jpg')"></van-image>
        </van-grid-item>
        <van-grid-item text="方案2">
          <van-image :src="require('./images/fangan2.jpg')"></van-image>
        </van-grid-item>
      </van-grid>
      <van-grid clickable :colum-num="2">
        <van-grid-item text="方案3">
          <van-image :src="require('./images/fangan3.jpg')"></van-image>
        </van-grid-item>
        <van-grid-item text="方案4">
          <van-image :src="require('./images/fangan4.jpg')"></van-image>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
