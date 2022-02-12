<template>
  <div class="home">
    <Swipe />
    <Peixunxianlu :routes="routes" />
    <Sidabaozhang />
    <About />
    <Gemingjingshen />
    <Huihuanglicheng />
    <Weidarongyao />
    <Dianhuazixun />
    <Gongsixinwen :news="news" :trends="trends" />
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
