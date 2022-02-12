export default {
  name: 'weidarongyao',
  data() {
    return {
      iscur: 0,
      autoplay: true,
      titleList: [
        {
          title: '历史上的荣誉',
          content: '毛泽东主席对三五九旅的赞誉：\n 1942年1月12日毛泽东接见三五九旅指战员时讲话：你们到东边东边安全，你们到西边西边安全，你们是一支能打仗会生产的部队，敌人不来就生产，敌人来了就拿起枪战斗！\n 1946年9月29日毛泽东在三五九旅南下北返回到延安的专题欢迎会上讲话：三五九旅（南下支队）的同志们！你们辛苦了！你们胜利了！你们不怕困难，不 怕牺牲，勇猛顽强，深入敌人心脏，敢于和敌人作斗争，胜利地返回延安。这是 我党历史上的第二次长征。'
        },
        {
          title: '三五九旅获得的荣誉',
          content: '1. 百战百胜的模范铁军（题头是“授予三五九旅：”,落款是“晋察冀边区 政府一九三九年五月”）\n2. 模范党军（题头是“授予三五九旅：”落款是“八路军总部一九三九年 五月”）\n3. 发展经济的先锋（题头是“三五九旅南泥湾生产是”，落款是“西北局 一九四二年十二月”）\n4. 很有创造精神（题头为“王震同志”，落款为“毛泽东”）\n5. 模范家属（题头为“陈敏同志”，落款为“毛泽东”）\n6. 为人民服务（题头为“何维忠同志”，落款为“毛泽东”）\n7. 以身作则（题头为“罗章同志”，落款为“毛泽东”）'
        }
      ]
    }
  },

  computed: {},

  mounted() {},

  methods: {
    setIscur(index) {
      this.$refs.swipe.swipeTo(index)
      this.iscur = index
    },
    change(index) {
      this.iscur = index
    },
    setAutoplay() {
      this.autoplay = false
    },
    changeAutoplay() {
      this.autoplay = true
    }
  }
}
