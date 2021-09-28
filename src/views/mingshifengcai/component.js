export default {
  data() {
    return {
      mingshi: [
        {
          name: '名师1',
          url: require('./images/1.jpg')
        },
        {
          name: '名师2',
          url: require('./images/1.jpg')
        },
        {
          name: '名师3',
          url: require('./images/1.jpg')
        },
        {
          name: '名师4',
          url: require('./images/1.jpg')
        }
      ]
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
