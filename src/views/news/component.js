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
  mounted() {
  },
  created() {
    this.getData()
    // this.formatTime()
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
      console.log(this.news[0].content)
      console.log(this.news[2].content)
      if (this.totalCount <= this.news.length) {
        this.finished = true
      }
      this.loading = false
      return this.news
    }
    // formatTime() {
    //   for (let x = 0; x <= this.news.length; x++) {
    //     this.lastUpdateTime = this.news[x].lastUpdateTime((val) => {
    //       return val.lastUpdateTime === this.news[x].lastUpdateTime
    //     })
    //     this.lastUpdateTime = this.news[x].lastUpdateTime.replace(/-/g, '/')
    //     this.news[x].lastUpdateTime = this.lastUpdateTime
    //     console.log(this.news[x].lastUpdateTime)
    //   }
    // }
  }
}
// for (let x = 0; x <= this.news.length; x++) {
//   this.news[x].content = this.news[x].content.slice(0, 100) + '...'
//   console.log(this.news[x].content)
// }
