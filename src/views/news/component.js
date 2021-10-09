import newsService from '../../api/news-service'
export default {
  data() {
    return {
      news: [],
      currentPage: 1,
      totalCount: 0,
      loading: false,
      finished: false
    }
  },
  mounted() {
  },
  created() {
    this.getData()
  },
  methods: {
    gotoMenu() {
      this.$router.go(-1)
    },
    loadMore() {
      this.currentPage += 1
      this.getData({ offset: (this.currentPage - 1) * 10 })
    },
    async getData(params = {}) {
      this.loading = true
      const { limit = 10, offset = 0 } = params
      const { data } = await newsService.getNewsList({ limit, offset })
      this.totalCount = data & data.totalCount
      this.news = (data.rows || [])
      if (this.totalCount <= this.news.length) {
        this.finished = true
      }
      this.loading = false
    }
  }
}
