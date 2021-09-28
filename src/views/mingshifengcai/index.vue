<!-- guanyuwomen -->
<template>
  <div class="home">
    <van-nav-bar  left-text="返回" @click-left="gotoMenu" title="名师风采" left-arrow>
    </van-nav-bar>
    <div class="pic">
      <div v-for="(mingshi, index) in mingshi" :key="index" class="mingshi-container">
        <div class="mingshi-single">
          <img :src="mingshi.url" alt="" />
          <span>{{ mingshi.name }}</span>
        </div>
      </div>
    </div>
    <van-pagination  class="paging" v-model="currentPage" :total-items="99" :show-page-size="5" force-ellipses/>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
