export default {
  name: 'NavLogo',
  data() {
    return {
      navList: [
        {
          router: 'home',
          name: '网站首页'
        },
        {
          router: 'peixunxianlu',
          name: '培训线路'
        },
        {
          router: 'peixunlueying',
          name: '培训掠影'
        },
        {
          router: 'mingshifengcai',
          name: '名师风采'
        },
        {
          router: 'rongyuzizhi',
          name: '荣誉资质'
        },
        {
          router: 'xinwendongtai',
          name: '新闻动态'
        },
        {
          router: 'guanyuwomen',
          name: '关于我们'
        },
        {
          router: 'lianxiwomen',
          name: '联系我们'
        }
      ]
    }
  },
  computed: {
    currentActiveTabIndex() {
      return this.$store.state.app.currentActiveTabIndex
    },
    popup() {
      return this.$store.state.app.popup
    }
  },
  methods: {
    showPopup() {
      this.$store.commit('app/setPopup', { value: true })
    },
    closePopup() {
      console.log('111111111111 :>> ', 111111111111)
      this.$store.commit('app/setPopup', { value: false })
    }
  }
}
