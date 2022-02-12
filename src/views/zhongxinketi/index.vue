<!-- guanyuwomen -->
<template>
  <div class="home-zhongxinketi">
    <van-nav-bar left-text="返回" @click-left="gotoMenu" title="中心课题" left-arrow />
    <van-tabs v-model="active">
      <van-tab title="专题教学" name="1">
        <div class="content">
          <div class="zhengwen">《三五九旅精神的历史传承与现实意义》</div>
          <div class="zhengwen">《兵团红色资源的价值与利用》</div>
          <div class="zhengwen">《传承三五九旅精神，当好兵团高质量发展的排头兵》</div>
          <div class="zhengwen">《延安精神在西北边疆的传承与实践》</div>
          <div class="zhengwen">《三个维度解析中国共产党的初心和使命》</div>
          <div class="zhengwen">《中国共产党党史》</div>
          <div class="zhengwen">《习近平关于文化建设的重要论述》</div>
          <div class="zhengwen">《中国共产党的百年历史》</div>
          <div class="zhengwen">《解读关于新形势下党内政治生活的若干准则》</div>
          <div class="zhengwen">《习近平关于党的建设重要论述》</div>
          <div class="zhengwen">《改革开放的历程与启示》</div>
          <div class="zhengwen">《关于正确处理人民内部矛盾的问题》</div>
          <div class="zhengwen">《习近平新时代中国特色社会主义经济思想》</div>
          <div class="zhengwen">《世界社会主义发展史》</div>
          <div class="zhengwen">《新中国史》</div>
          <div class="zhengwen">《三五九旅精神》</div>
          <div class="zhengwen">《习近平总书记关于乡村振兴战略重要论述》</div>
        </div>
      </van-tab>
      <van-tab title="专业提升" name="2">
        <div class="content">
          <div class="zhengwen">《党务知识及基层党组织建设工作重点》</div>
          <div class="zhengwen">《公务员职业道德建设专题讲座》</div>
          <div class="zhengwen">《心理健康与心理调适》</div>
          <div class="zhengwen">《提高领导干部危机管理的能力》</div>
          <div class="zhengwen">《新疆在意识形态领域的反分裂斗争》</div>
          <div class="zhengwen">《新疆民族史》</div>
          <div class="zhengwen">《构建各民族互嵌式社会结构和社区环境，推动铸牢中华民族共同体意识》</div>
          <div class="zhengwen">《网络安全应对和网络舆情处置》</div>
          <div class="zhengwen">《“互联网+ ”经济社会发展的新引擎》</div>
        </div>
      </van-tab>
      <van-tab title="特色课程" name="3">
        <div class="content">
          <div class="zhengwen">《新疆兵团的红色基因一一三五九旅是模范》</div>
          <div class="zhengwen">《新疆的若干历史问题白皮书》</div>
          <div class="zhengwen">《新疆屯垦与兵团使命》</div>
          <div class="zhengwen">《西域新疆文化的正本清源》</div>
          <div class="zhengwen">《丝路文明与向西开放》</div>
          <div class="zhengwen">《塔里木开发建设与发展》</div>
          <div class="zhengwen">《南疆兵团中心城市责任与使命》</div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
