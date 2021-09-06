export default {
  name: 'gemingjinshen',
  data() {
    return {
      iscur: 0,
      autoplay: true,
      titleList: [
        {
          title: '塔里木河'
        },
        {
          title: '丝绸之路'
        },
        {
          title: '昆岗文化'
        },
        {
          title: '三五九旅'
        }
      ],
      imgList: [
        {
          id: '01',
          imgUrl: require('./images/1.jpg'),
          alt: '塔里木河',
          title: '塔里木河',
          content: '全长2437公里的塔里木河是塔河流域各族人民群众的母亲河，滋养了为数众多的南疆各族人民，孕育了塔里木河文明，是人类文明的摇篮之一。阿克苏河、喀什噶尔河、叶尔羌河、和田河四大源流在师市的十六团新开岭镇汇聚形成主流，开始统称塔里木河。'
        },
        {
          id: '02',
          imgUrl: require('./images/2.jpg'),
          alt: '丝绸之路',
          title: '丝绸之路',
          content: '师市不仅是古代绿洲丝绸之路的必经地，也是丝绸之路经济带核心区（新疆）中线的重要战略支点。师市正借助“一带一路”国家合作机制和“中巴经济走廊”“中西亚经济走廊”，努力建设国家布局的“新安西四镇”之区域中心城市。'
        },
        {
          id: '03',
          imgUrl: require('./images/3.jpg'),
          alt: '昆岗文化',
          title: '昆岗文化',
          content: '阿拉尔在汉唐称为昆岗，在师市境内有方圆20—30公里的永宁和昆岗两个古墓群，是四千年前部落族群繁衍生存的历史见证。西汉宣帝派郑吉开始了屯垦戍边的历史，其驻守遗地在库（车）阿（拉尔）一带，数千年来中央王朝对新疆的治理和开发绵延不断。新中国成立后，师市人民在塔克拉玛干沙漠的亘古荒原上奏响了“开发塔里木、建设阿拉尔”的凯歌。'
        },
        {
          id: '04',
          imgUrl: require('./images/4.jpg'),
          alt: '三五九旅',
          title: '三五九旅',
          content: '1949年11月，由王震率领的其所属中国人民解放军第一野战军第一兵团第二军步兵五师（前359旅）进驻阿克苏，1953年6月，步兵五师奉命改编为中国人民解放军新疆军区农业建设第一师，次年，归属新疆军区生产建设兵团。“生在井冈山、长在南泥湾、转战数万里、屯垦在天山”是这支光荣劲旅从革命战争到维稳戍边的辉煌写照。'
        }
      ]
    }
  },

  computed: {},

  mounted() {},

  methods: {
    setIscur(index) {
      this.$refs.remarkCarusel.setActiveItem(index)
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
