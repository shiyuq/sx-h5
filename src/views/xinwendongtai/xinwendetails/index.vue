<!-- guanyuwomen -->
<template>
  <div class="home">
    <van-nav-bar  left-text="返回" :to="'home'" title="常见问题解答" left-arrow>
    </van-nav-bar>
    <div class="news">
    </div>
    <div class="xiangguanzixun">
      <ul></ul>
    </div>
   ·<van-pagination v-model="currentPage" :page-count="4" mode="simple" />
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
