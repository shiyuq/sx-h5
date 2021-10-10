export default {
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
    gotoMenu() {
      this.$router.go(-1)
      // this.$router.go('/home')
    }
  }
}
