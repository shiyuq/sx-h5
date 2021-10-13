import trainService from '../../api/train-service'
import newsService from '../../api/news-service'
import Swipe from './components/swipe'
import Peixunxianlu from './components/peixunxianlu'
import Sidabaozhang from './components/sidabaozhang'
import About from './components/about'
import Gemingjingshen from './components/gemingjingshen'
import Dianhuazixun from './components/dianhuazixun'
import Gongsixinwen from './components/gongsixinwen'

export default {
  name: 'Home',
  data() {
    return {
      currentIndex: 0,
      routes: [],
      news: [],
      trends: []
    }
  },

  components: {
    Swipe,
    Peixunxianlu,
    Sidabaozhang,
    About,
    Gemingjingshen,
    Dianhuazixun,
    Gongsixinwen
  },

  created() {
    this.initData()
  },

  computed: {},

  mounted() {},

  methods: {
    async initData() {
      const [routes, news, trends] = await Promise.all([
        trainService.getRecmdTrain({ limit: 4, offset: 0 }),
        newsService.getNewsList({ type: 1, limit: 5, offset: 0 }),
        newsService.getNewsList({ type: 2, limit: 5, offset: 0 })
      ])
      this.routes = routes && routes.data || []
      this.news = news && news.data && news.data.rows || []
      this.trends = trends && trends.data && trends.data.rows || []
    }
  }
}
