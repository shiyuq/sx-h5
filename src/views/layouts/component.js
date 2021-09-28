import TabBar from '@/components/tabbar'
import NavLogo from '@/components/nav-logo'

export default {
  name: 'AppLayout',
  data() {
    return {
      tabbars: [
        {
          title: '网站首页',
          to: '/home',
          icon: 'home-o'
        },
        {
          title: '培训线路',
          to: '/peixunxianlu',
          icon: 'apps-o'
        },
        {
          title: '电话咨询',
          to: '/dianhuazixun',
          icon: 'phone-o'
        },
        {
          title: '联系我们',
          to: '/lianxiwomen',
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
      console.log('您点击了:', v)
    }
  }
}
