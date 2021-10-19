<template>
  <div class="home-peixun" v-if="train">
    <van-nav-bar left-text="返回" @click-left="gotoMenu" :title="train.address" left-arrow />
    <div class="content">
      <div class="title">{{ train.title }}</div>
      <div class="photo">
        <img :src="train.trainPhotoUrl" alt="" />
        <div style="margin: 10px 0">不忘初心，牢记使命！</div>
      </div>
      <div class="fuwenben">
        <van-tabs v-model="active" scrollspy sticky>
          <van-tab v-for="item in tabs" :title="item.name" :key="item.id">
            <div v-if="item.id === 0">
              <div v-html="train.content" style="padding: 10px"></div>
            </div>
            <div v-else>
              <div class="leave-contact">
                <div>在线留言</div>
                <a href="tel:15083931223">15083931223</a>
              </div>
              <div class="contact-info">
                <van-cell-group>
                  <van-field v-model="infomation.name" label="姓名" placeholder="请输入姓名" />
                  <van-field v-model="infomation.phone" label="手机" placeholder="请输入手机号码" />
                  <van-field
                    v-model="infomation.consultInfo"
                    rows="2"
                    autosize
                    label="备注"
                    type="textarea"
                    maxlength="100"
                    placeholder="请输入您的需求"
                    show-word-limit
                  />
                </van-cell-group>
                <div style="padding: 10px">
                  <van-button type="danger" block size="middle" @click="submit">提交</van-button>
                </div>
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
