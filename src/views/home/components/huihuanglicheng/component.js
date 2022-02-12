export default {
  name: 'huihuanglicheng',
  data() {
    return {
      iscur: 0,
      autoplay: true,
      titleList: [
        {
          title: '井冈红旗',
          content: '1929年初，随着中央红军的战略性转移，守护革命摇篮的使命 托付给王震等人，湘赣各地游击队成长为地方性主力红军，有力地支援了中央红 军的四次反“围剿” ,1934年8月红六军团先遣突围，拉开长征的序幕。'
        },
        {
          title: '华北铁军',
          content: '1937年至1945年，以红六军团为主体改编的三五九旅，挥戈 晋西北、扬威晋察冀，攻城克坚，作战以百计、歼敌逾万数，获得“百战百胜的 铁军”、“模范党军”的铁血荣誉。'
        },
        {
          title: '延安模范',
          content: '1939年10月，三五九旅回师陕北，负责中共中央的保卫工作。 为打破敌军封锁，进驻南泥湾，投身大生产，垦荒办厂，英模辈出，被边区政府 誉为“发展经济的先锋”，《南泥湾》即是写照。'
        },
        {
          title: '西北先锋',
          content: '1949年2月，三五九旅奉命整编为解放军二军步兵五师，王震 率部衣不解甲、请缨进疆，克玉门、越祁连、饮马塔河、剿匪和田，并分兵屯伊 犁、驻阿山，进若羌，守藏北，开创了新天地。'
        },
        {
          title: '天山骄子',
          content: '为响应中央和毛主席号召，1954年10月，驻疆部队就地转业， 成为新疆军区生产建设兵团。继承三五九旅血脉的第一师率先垂范、再造“南泥湾”，谱写了屯垦戍边新篇章。'
        },
        {
          title: '昆仑尖兵',
          content: '上世纪八十年代末，兵团人“二次创业”，新疆面貌随之发生 巨大变化。中央新疆工作座谈会之后，各地又紧紧围绕新战略，推进现代文明建 设蓬勃发展。兵团城镇建设发展日新月异，三五九旅精神光芒四射。'
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
