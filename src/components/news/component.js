export default {
  name: 'News',
  data() {
    return {
      introContentList: [
        {
          url: '/peixunxianlu/6847464567841226752',
          imgUrl: require('../../assets/丝绸之路1.jpg'),
          content: '丝绸之路五晚六天培训方案'
        },
        {
          url: '/peixunxianlu/6847464679711703040',
          imgUrl: require('../../assets/千鸟湖1.jpg'),
          content: '千鸟湖五天培训方案'
        },
        {
          url: '/peixunxianlu/6847465163252039680',
          imgUrl: require('../../assets/文化馆1.jpg'),
          content: '文化馆五晚六天培训方案'
        },
        {
          url: '/peixunxianlu/6847465287726399488',
          imgUrl: require('../../assets/沙漠之门1.jpg'),
          content: '沙漠之门四晚五天培训方案'
        }
      ]
    }
  },
  watch: {
    '$route': 'changeActive'
  },
  methods: {
  }
}
