export default {
  name: 'zhongxinketi',
  data() {
    return {
      iscur: 0,
      autoplay: true,
      active: 1
    }
  },

  computed: {},

  mounted() {},

  methods: {
    gotoMenu() {
      this.$router.go(-1)
    }
  }
}
