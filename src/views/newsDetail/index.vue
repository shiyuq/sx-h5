<!-- guanyuwomen -->
<template>
  <div class="home">
    <van-nav-bar  left-text="返回" @click-left="gotoMenu" title="新闻动态" left-arrow>
    </van-nav-bar>
    <div class="news">
      <ul>
        <li>
          <div class="title">会提供哪些教学服务？<br>
            <span>发表时间：20xx-xx-xx</span>
          </div>
          <p>1、学习资料 <br>
学习期间，我们为学员提供完备的学习资料。其中包含：资料袋、学员代表证、笔、笔记本、光盘（内刻录授课讲师课件）、当地地图、一次性雨衣等。也可根据培训班特殊要求，提供班服、班帽等。</p>
        </li>
        <li></li>
      </ul>
    </div>
    <div class="zixun">相关资讯

    </div>
    <div class="tuijian">推荐线路</div>
   ·<van-pagination v-model="currentPage" :page-count="4" mode="simple" />
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
