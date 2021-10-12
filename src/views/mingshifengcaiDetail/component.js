// import News from '../../../../components/news'
// import RecommendRoute from '../../../../components/recommendRoute'
export default {
  name: 'mingshifengcai',
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
    teachers() {
      return this.$store.state.app.teachers
    }
  },
  mounted() {
  },
  created() {
    this.getIdIndex()
  },
  methods: {
    gotoMenu() {
      this.$router.go(-1)
    },
    getIdIndex() {
      if (this.teachers) {
        this.idIndex = this.teachers.findIndex((val) => {
          return val.id === this.$route.params.id
        })
      }
    }
  }
}
