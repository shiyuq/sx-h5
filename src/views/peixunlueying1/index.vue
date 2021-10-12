<!-- rongyuzizhixiangq -->
<template>
  <div class="home">
    <van-nav-bar left-text="返回" @click-left="gotoMenu" title="培训掠影详情" left-arrow> </van-nav-bar>
    <div class="contentLeft">
      <div class="box">
        <h1>培训掠影</h1>
        <div class="title">
          <div class="titleContent">
            <span>文章出处：未知</span>
            <span> 发表时间：{{ cameras[idIndex].createdTime.split(' ')[0] }} </span>
          </div>
          <div class="pic">
            <img :src="cameras[idIndex].cameraPhotoUrl" />
          </div>
        </div>
      </div>
      <!-- <RecommendRoute /> -->
    </div>
    <!-- <News/> -->
    <!-- ·<van-pagination v-model="currentPage" :page-count="4" mode="simple" /> -->
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
