// import News from '../../../../components/news'
// import RecommendRoute from '../../../../components/recommendRoute'
export default {
  name: 'rongyuzizhi',
  // components: {
  //   News,
  //   RecommendRoute
  // },
  data() {
    return {
      idIndex: null
    }
  },
  computed: {
    certificates() {
      return this.$store.state.app.certificates
    }
  },
  created() {
    this.getIdIndex()
  },
  mounted() {
  },
  methods: {
    gotoMenu() {
      this.$router.go(-1)
    },
    getIdIndex() {
      if (this.certificates) {
        this.idIndex = this.certificates.findIndex((val) => {
          return val.id === this.$route.params.id
        })
      }
    }
  }
}
