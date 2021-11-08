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
      console.log(this.news)
      for (let x = 0; x <= this.news.length; x++) {
        this.news[x].content.splice(40, this.news[x].content.length)
        this.news[x].content = this.news[x].content + '...'
      }
      for (let x = 0; x <= this.news.length; x++) {
        this.news[x].lastUpdateTime = this.news[x].lastUpdateTime.replace(/-/g, '/')
        console.log(this.news[x].lastUpdateTime)
      }
      if (this.totalCount <= this.news.length) {
        this.finished = true
      }
      this.loading = false
    }
  }
}
