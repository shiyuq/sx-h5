<!-- mingshifengcai -->
<template>
  <div class="home">
    <van-nav-bar left-text="返回" @click-left="gotoMenu" title="名师风采详情" left-arrow> </van-nav-bar>
    <div class="contentLeft">
      <div class="box">
        <h1>{{ teachers[idIndex].name }}</h1>
        <div class="title">
          <div class="titleContent">
            <span> 发表时间：{{ teachers[idIndex].createdTime.split(' ')[0] }} </span>
          </div>
          <p>{{ teachers[idIndex].content }}</p>
          <div class="pic">
            <img :src="teachers[idIndex].teacherPhotoUrl" />
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
