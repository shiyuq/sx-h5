export default {
  name: 'photoEnter',
  data() {
    return {
    }
  },
  created() {
    this.getTeacherList()
  },
  mounted() {
  },
  methods: {
    gotoMenu() {
      this.$router.go(-1)
    },
    async getTeacherList() {
      this.$store.dispatch('app/setTeachers', {})
    }
  }
}
