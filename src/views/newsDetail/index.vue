<template>
  <div class="home-xinwen" v-if="news">
    <van-nav-bar left-text="返回" @click-left="gotoMenu" :title="news.title" left-arrow> </van-nav-bar>
    <div class="content">
      <h4>{{ news.title }}</h4>
      <div class="editor-content" v-html="news.content"></div>
    </div>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
