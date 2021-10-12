export default {
  data() {
    return {
      currentPage: 1,
      totalCount: 0,
      loading: false,
      finished: true
    }
  },
  computed: {
    routes() {
      return this.$store.state.app.cameras
    }
  },
  mounted() {
  },
  methods: {
    gotoMenu() {
      this.$router.go(-1)
      // this.$router.go('/home')
    },
    loadMore() {
    }
  }
}
