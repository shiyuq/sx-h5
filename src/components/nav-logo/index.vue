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
      v-model="popup"
      close-icon="close"
      position="bottom"
      style="height: 100%"
      @click="closePopup"
    />
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
