import { Toast } from 'vant'

export default {
  data() {
    return {
      value: '',
      iscur: 0,
      autoplay: true,
      titleList: [
        {
          title: '企业简介',
          src: '/guanyuwomen'
        },
        {
          title: '企业文化',
          src: '/companyCulture'
        },
        {
          title: '企业风采',
          src: '/companyProfile'
        }
      ]
    }
  },
  mounted() {
  },
  methods: {
    onSearch(val) {
      Toast(val)
    },
    onCancel() {
      Toast('取消')
    },
    gotoMenu() {
      this.$router.go(-1)
    },
    setIscur(index) {
      this.$refs.swipe.swipeTo(index)
      this.iscur = index
    },
    change(index) {
      this.iscur = index
    }
  }
}
