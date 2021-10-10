<template>
  <div>
    <header>
      <h1>
        <a href="/">
          <img src="@/assets/logo.png" alt="三五九旅干部培训中心" />
          <span>三五九旅干部培训中心</span>
        </a>
      </h1>
      <van-icon name="wap-nav" class="wap-nav" @click="showPopup" />
    </header>
    <van-popup
      :value="popup"
      closeable
      close-icon="close"
      position="top"
      style="height: 100vh; background-color: #383735"
      @click="closePopup"
    >
      <div class="nav-bar">
        <div v-for="(item, index) in navList" :key="item.router" class="nav-item" @click="selectTab(item, index)">
          <div class="nav-item-single">
            <span v-if="index === currentActiveTabIndex" style="color: #a9050e">{{ item.name }}</span>
            <span v-else style="color: #fff">{{ item.name }}</span>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
