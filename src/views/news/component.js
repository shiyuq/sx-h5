import newsService from '../../api/news-service'
export default {
  data() {
    return {
      news: [],
      currentPage: 1,
      totalCount: 0,
      loading: false,
      finished: false,
      lastUpdateTime: '',
      content: ''
    }
  },
  computed: {
    news() {
      return this.$store.state.app.news
    }
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
      // console.log(this.news)
      // console.log(this.news[0].content)
      // console.log(this.news[2].content)
      if (this.totalCount <= this.news.length) {
        this.finished = true
      }
      this.loading = false
      return this.news
    }
  }
}
