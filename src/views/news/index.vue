<!-- guanyuwomen -->
<template>
  <div class="home">
    <van-nav-bar left-text="返回" @click-left="gotoMenu" title="新闻动态" left-arrow> </van-nav-bar>
    <div>
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="loadMore" class="fangan">
        <div v-if="news">
          <dl v-for="(item, index) in news" :key="index">
            <router-link :to="'/xinwendongtai/' + item.id">
              <dt>
                {{ new Date(item.lastUpdateTime.replace(/-/g, '/')).getMonth() + 1 }}
                <span>{{ new Date(item.lastUpdateTime.replace(/-/g, '/')).getDate() }}</span>
              </dt>
              <dd>
                <h5>
                  {{ item.title }}
                </h5>
                <div class="editor-content" v-html="item.content.replace(/div/g, 'p')"></div>
              </dd>
            </router-link>
          </dl>
        </div>
      </van-list>
    </div>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
