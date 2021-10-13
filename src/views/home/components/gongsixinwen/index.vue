<template>
  <div class="home-peixun">
    <div class="title">
      <h2>公司新闻|行业动态</h2>
      <p>NEWS</p>
      <div class="redline"></div>
    </div>
    <!-- v-model="active"  -->
    <van-tabs type="card">
      <van-tab title="公司新闻">
        <div v-if="news" class="news">
          <dl v-for="(item, index) in news" :key="index">
            <router-link :to="'/xinwendongtai/' + item.id">
              <dt>
                {{ new Date(item.lastUpdateTime).getMonth() + 1 }}
                <span>{{ new Date(item.lastUpdateTime).getDate() }}</span>
              </dt>
              <dd>
                <h5>
                  {{ item.title }}
                </h5>
                <div class="editor-content" v-html="item.content"></div>
              </dd>
            </router-link>
          </dl>
        </div>
      </van-tab>
      <van-tab title="行业动态">
        <div v-if="trends" class="news">
          <dl v-for="(item, index) in trends" :key="index">
            <router-link :to="'/xinwendongtai/' + item.id">
              <dt>
                {{ new Date(item.lastUpdateTime).getMonth() + 1 }}
                <span>{{ new Date(item.lastUpdateTime).getDate() }}</span>
              </dt>
              <dd>
                <h5>
                  {{ item.title }}
                </h5>
                <div class="editor-content" v-html="item.content"></div>
              </dd>
            </router-link>
          </dl>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
