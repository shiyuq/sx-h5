import { Toast } from 'vant'

export default {
  data() {
    return {
      value: '',
      active: 1,
      routes: [
        {
          name: '风采1',
          url: require('./images/1.jpg')
        },
        {
          name: '风采2',
          url: require('./images/1.jpg')
        },
        {
          name: '风采3',
          url: require('./images/1.jpg')
        },
        {
          name: '风采4',
          url: require('./images/1.jpg')
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
    }
  }
}
