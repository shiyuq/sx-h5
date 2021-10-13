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
      return this.$store.state.app.teachers
    }
  },
  methods: {
    gotoMenu() {
      this.$router.go(-1)
    },
    loadMore() {
    }
  }
}
