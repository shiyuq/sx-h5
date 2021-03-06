// import News from '../../../../components/news'
// import RecommendRoute from '../../../../components/recommendRoute'
export default {
  name: 'peixunlueying1',
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
    cameras() {
      return this.$store.state.app.cameras
    }
  },
  mounted() {
  },
  watch: {
    cameras: {
      handler() {
        this.getIdIndex()
      }
    }
  },
  created() {
    this.getIdIndex()
  },
  methods: {
    gotoMenu() {
      this.$router.go(-1)
    },
    getIdIndex() {
      if (this.cameras) {
        this.idIndex = this.cameras.findIndex((val) => {
          return val.id === this.$route.params.id
        })
      }
    }
  }
}
