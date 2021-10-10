import { Toast } from 'vant'

export default {
  data() {
    return {
      value: '',
      active: 1
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
