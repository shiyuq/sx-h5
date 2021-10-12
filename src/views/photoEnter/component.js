export default {
  name: 'photoEnter',
  data() {
    return {
    }
  },
  created() {
    this.getCameraList()
  },
  mounted() {
  },
  methods: {
    gotoMenu() {
      this.$router.go(-1)
      // this.$router.go('/home')
    },
    async getCameraList() {
      this.$store.dispatch('app/setCameras', {})
    }
  }
}
