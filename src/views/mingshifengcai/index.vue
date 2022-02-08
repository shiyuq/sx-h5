<!-- mingshifengcai -->
<template>
  <div class="home">
    <van-nav-bar left-text="返回" @click-left="gotoMenu" title="名师风采" left-arrow />
    <van-tabs v-model="active">
      <van-tab title="名师风采" name="1">
        <div>
          <van-list :finished="finished" finished-text="没有更多了" @load="loadMore" class="photo">
            <div v-for="(route, index) in routes" :key="index" class="mingshi-container">
              <router-link :to="'/mingshifengcai/' + route.id">
                <div class="mingshi-single">
                  <img :src="route.teacherPhotoUrl" alt="" />
                  <span>{{ route.name }}</span>
                </div>
              </router-link>
            </div>
          </van-list>
        </div>
      </van-tab>
      <van-tab title="中心课题" name="2"> </van-tab>
    </van-tabs>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
