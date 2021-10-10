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
          title: '关于我们',
          to: '/guanyuwomen',
          icon: 'contact'
        },
        {
          title: '联系我们',
          to: '/lianxiwomen',
          icon: 'comment-circle-o'
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
