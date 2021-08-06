<template>
  <div>
    <header>
      <h1>
        <a href="/">
          <img
            src="@/assets/logo.png"
            alt="陕西红色传承文化培训有限公司官方网站 党性教育培训 红色文化传承 红色培训教育 事业单位红色教育 事业单位红色培训"
          />
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
      <ul>
        <li v-for="(item, index) in navList" :key="item.router">
          <span v-if="index === currentActiveTabIndex" style="color: #a9050e">{{ item.name }}</span>
          <span v-else style="color: #fff" @click="selectTab(item)">{{ item.name }}</span>
        </li>
      </ul>
    </van-popup>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
