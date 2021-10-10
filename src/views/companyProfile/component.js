export default {
  data() {
    return {
      routes: [
        {
          name: '风采1',
          url: require('./images/1.jpg')
        },
        {
          name: '风采2',
          url: require('./images/1.jpg')
        },
        {
          name: '风采3',
          url: require('./images/1.jpg')
        },
        {
          name: '风采4',
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
