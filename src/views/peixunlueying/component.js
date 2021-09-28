export default {
  data() {
    return {
      lueying: [
        {
          name: '培训掠影1',
          url: require('./images/3.jpg')
        },
        {
          name: '培训掠影2',
          url: require('./images/4.jpg')
        },
        {
          name: '培训掠影3',
          url: require('./images/3.jpg')
        },
        {
          name: '培训掠影4',
          url: require('./images/4.jpg')
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
