export default {
  name: 'certificateEnter',
  data() {
    return {
    }
  },
  created() {
    this.getCertificateList()
  },
  mounted() {
  },
  methods: {
    gotoMenu() {
      this.$router.go(-1)
    },
    async getCertificateList() {
      this.$store.dispatch('app/setCertificates', {})
    }
  }
}
