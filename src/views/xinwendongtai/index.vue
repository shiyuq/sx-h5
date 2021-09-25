<!-- guanyuwomen -->
<template>
  <div class="home">
    <van-nav-bar  left-text="返回" @click-left="gotoMenu" title="新闻动态" left-arrow>
    </van-nav-bar>
    <div class="news">
      <ul>
        <li>
          <div class="title"></div>
          <p></p>
        </li>
        <li></li>
      </ul>
    </div>
   ·<van-pagination v-model="currentPage" :page-count="4" mode="simple" />
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
