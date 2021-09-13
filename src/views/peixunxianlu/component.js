export default {
  data() {
    return {}
  },

  computed: {},

  mounted() {},

  methods: {
    gotoMenu() {
      this.$router.go(-1)
      // this.$router.go('/home')
    }
  }
}
