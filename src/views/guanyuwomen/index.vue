<!-- guanyuwomen -->
<template>
  <div class="home-guanyuwomen">
    <van-nav-bar left-text="返回" @click-left="gotoMenu" title="关于我们" left-arrow />
    <van-tabs v-model="active">
      <van-tab title="企业简介" name="1">
        <div class="content">
          <img :src="require('./images/1.jpg')" />
          <div class="zhengwen">
            三五九旅干部培训中心，隶属于三五九旅干部学院，在以“践行三五
            九旅精神、胡杨精神和兵团精神，传承红色基因，赓续红色血脉”为主
            题，深入推进党史专题教育培训课堂，充分发挥兵团解放新疆、建设新
            疆、屯垦戍边、维稳戍边丰富红色资源的独特优势的前提下，并合力与
            “全国党建联盟体”共同打造出暨韶山、井冈山、瑞金、古田、遵义、延
            安等全国红色教育、爱国主义教育基地线路，以专题教学、现场教学、体
            验教学、激情教学、案例式拓展教学、研讨式互动教学以及情感教学、场
            景教学等独特教学方式，让学员“扮演一名军垦战士、深入一处历史现
            场、参观一遍红色场馆、缅怀一次戍边先烈、尝试一回戍边壮举、学唱一
            首红色歌谣、体验一天屯垦生活、重走一趟生死征途、参与一堂红色课
            程”,使学员在历史现场中多维度地深刻体验先辈们在革命时期的历史壮
            举与革命精神，达到“真学、真懂、真信、真用”的培训效果。
          </div>
        </div>
        <!-- <form action="/">
          <van-search
            v-model="value"
            show-action
            placeholder="请输入搜索关键词"
            @search="onSearch"
            @cancel="onCancel"
          ></van-search>
        </form> -->
      </van-tab>
      <van-tab title="企业文化" name="2">
        <div class="content2">
          <img src="./images/2.jpg" />
          <div class="zhengwen2">践行三五九旅精神</div>
          <div class="zhengwen2">胡杨精神和兵团精神</div>
          <div class="zhengwen2">传承红色基因</div>
          <div class="zhengwen2">赓续红色血脉</div>
        </div>
        <!-- <form action="/">
          <van-search
            v-model="value"
            show-action
            placeholder="请输入搜索关键词"
            @search="onSearch"
            @cancel="onCancel"
          ></van-search>
        </form> -->
      </van-tab>
      <van-tab title="企业风采" name="3">
        <div class="content3">
          <van-list :finished="finished" finished-text="没有更多了" class="photo">
            <div v-for="(company, index) in companies" :key="index" class="company-container">
              <div class="company-single">
                <img :src="company.companyPhotoUrl" alt="" />
                <!-- <span>{{ company.name }}</span> -->
              </div>
            </div>
          </van-list>
        </div>
        <!-- <form action="/">
          <van-search
            v-model="value"
            show-action
            placeholder="请输入搜索关键词"
            @search="onSearch"
            @cancel="onCancel"
          ></van-search>
        </form> -->
      </van-tab>
    </van-tabs>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
