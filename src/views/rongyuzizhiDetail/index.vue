<!-- rongyuzizhixiangq -->
<template>
  <div class="home">
    <van-nav-bar left-text="返回" @click-left="gotoMenu" title="荣誉资质详情" left-arrow> </van-nav-bar>
    <div class="contentLeft">
      <div class="box">
        <h1>{{ certificates[idIndex].name }}</h1>
        <div class="title">
          <div class="titleContent">
            <span> 发表时间：{{ certificates[idIndex].createdTime.split(' ')[0] }} </span>
          </div>
          <div class="pic">
            <img :src="certificates[idIndex].certificatePhotoUrl" />
          </div>
        </div>
      </div>
      <!-- <RecommendRoute /> -->
    </div>
    <!-- ·<van-pagination v-model="currentPage" :page-count="4" mode="simple" /> -->
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
