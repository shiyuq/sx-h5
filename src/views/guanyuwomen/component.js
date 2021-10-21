import { Toast } from 'vant'
import companyService from '../../api/company-service'

export default {
  data() {
    return {
      value: '',
      active: 1,
      currentPage: 1,
      totalCount: 0,
      loading: false,
      finished: false,
      companies: null
    }
  },
  created() {
    this.initData()
  },
  methods: {
    async initData() {
      const { data } = await companyService.getCompanyList()
      this.companies = data
    },
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
