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
    },
    async getCameraList() {
      this.$store.dispatch('app/setCameras', {})
    }
  }
}
