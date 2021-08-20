import { Toast } from 'vant'

export default {
  data() {
    return {
      value: ''
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
    }
  }
}
