import newsService from '../../api/news-service'

export default {
  data() {
    return {
      id: '',
      news: null
    }
  },

  created() {
    this.id = this.$route.params.id || ''
    this.getData()
  },

  computed: {},

  mounted() {},

  methods: {
    gotoMenu() {
      this.$router.go(-1)
    },

    async getData() {
      const { data } = await newsService.getNewsDetail({ id: this.id })
      this.news = data || null
    }
  }
}
