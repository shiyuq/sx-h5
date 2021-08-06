import TabBar from '@/components/tabbar'
import NavLogo from '@/components/nav-logo'

export default {
  name: 'AppLayout',
  data() {
    return {
      tabbars: [
        {
          title: '网站首页',
          to: {
            name: 'Home'
          },
          icon: 'home-o'
        },
        {
          title: '培训线路',
          to: {
            name: 'About'
          },
          icon: 'apps-o'
        },
        {
          title: '电话咨询',
          to: {
            name: 'About1'
          },
          icon: 'phone-o'
        },
        {
          title: '返回顶部',
          to: {
            name: 'About2'
          },
          icon: 'back-top'
        }
      ]
    }
  },
  components: {
    TabBar,
    NavLogo
  },
  methods: {
    handleChange(v) {
      console.log('tab value:', v)
    }
  }
}
