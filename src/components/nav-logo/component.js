export default {
  name: 'NavLogo',
  data() {
    return {
      navList: [
        {
          router: '/home',
          name: '网站首页'
        },
        {
          router: '/peixunxianlu',
          name: '培训线路'
        },
        {
          router: '/peixunlueying',
          name: '培训掠影'
        },
        {
          router: '/mingshifengcai',
          name: '名师风采'
        },
        {
          router: '/rongyuzizhi',
          name: '荣誉资质'
        },
        {
          router: '/xinwendongtai',
          name: '新闻动态'
        },
        {
          router: '/guanyuwomen',
          name: '关于我们'
        },
        {
          router: '/lianxiwomen',
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
  watch: {
    '$route': 'changeActive'
  },
  methods: {
    showPopup() {
      this.$store.commit('app/setPopup', { value: true })
    },
    closePopup() {
      this.$store.commit('app/setPopup', { value: false })
    },
    selectTab(item, index) {
      this.$store.commit('app/setCurrentActiveTabIndex', index)
      this.$router.push({ path: item.router })
    },
    changeActive(val) {
      if (val.path === '/') {
        this.$store.commit('app/setCurrentActiveTabIndex', 0)
      } else {
        const index = this.navList.findIndex(item => val.path.indexOf(item.router) > -1)
        if (index >= 0) {
          this.$store.commit('app/setCurrentActiveTabIndex', index)
        } else {
          this.$store.commit('app/setCurrentActiveTabIndex', 0)
        }
      }
    }
  }
}
