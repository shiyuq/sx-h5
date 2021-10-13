// import certificateService from '../../api/certificate-service'

export default {
  data() {
    return {
      currentPage: 1,
      totalCount: 0,
      loading: false,
      finished: false
    }
  },
  mounted() {
  },
  computed: {
    routes() {
      return this.$store.state.app.certificates
    }
  },
  methods: {
    gotoMenu() {
      this.$router.go(-1)
    },
    loadMore() {
      // this.currentPage += 1
      // this.getData({ offset: (this.currentPage - 1) * 10 })
    }
    // async getData(params = {}) {
    //   this.loading = true
    //   const { limit = 10, offset = 0 } = params
    //   const { data } = await certificateService.getCertificate({ limit, offset })
    //   this.totalCount = data && data.totalCount
    //   this.routes = this.routes.concat((data && data.items) || [])
    //   if (this.totalCount <= this.routes.length) {
    //     this.finished = true
    //   }
    //   this.loading = false
    // }
  }
}
