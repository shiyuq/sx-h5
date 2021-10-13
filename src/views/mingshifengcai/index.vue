<!-- mingshifengcai -->
<template>
  <div class="home">
    <van-nav-bar left-text="返回" @click-left="gotoMenu" title="名师风采" left-arrow />
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
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
