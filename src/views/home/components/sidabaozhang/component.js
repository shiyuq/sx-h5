export default {
  data() {
    return {
      iscur: 0,
      autoplay: true,
      titleList: [
        {
          title: '教学资源'
        },
        {
          title: '师资队伍'
        },
        {
          title: '规范专业'
        },
        {
          title: '创新特色'
        }
      ],
      imgList: [
        {
          id: '01',
          imgUrl: require('./images/3-1.jpg'),
          alt: '教学资源',
          title: '教学资源',
          content: '立足革命老区，依托延安及照金得天独厚的红色文化资源，与中国延安干部学院、延安市委党校、延安干部培训学院有着良好的合作与联合办学经验。'
        },
        {
          id: '02',
          imgUrl: require('./images/3-2.jpg'),
          alt: '师资队伍',
          title: '师资队伍',
          content: '授课老师均来自当地干部学院、党校、院校、省（市）委理论讲师团及革命红色传人，具备教授、副教授、讲师、研究院、高级政工师等职称，课题在业内有良好的口碑并获得学员一致好评。'
        },
        {
          id: '03',
          imgUrl: require('./images/3-3.jpg'),
          alt: '规范专业',
          title: '规范专业',
          content: '严格遵从上级部门对红色教育培训的最新指示，根据委培单位的需求和特点，积极开发出符合不同培训对象的多元化的培训课程及模式。建立了完善的红色教育专家库，配备了一支经验丰富、纪律严明、服务专业、爱岗敬业的师资和后勤保障队伍。'
        },
        {
          id: '04',
          imgUrl: require('./images/3-4.jpg'),
          alt: '创新特色',
          title: '创新特色',
          content: '创新特色'
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
    }
  }
}
