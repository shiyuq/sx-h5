export default {
  data() {
    return {
      lueying: [
        {
          name: '培训掠影1',
          url: require('./images/3.jpg'),
          src: '/peixunlueying1'
        },
        {
          name: '培训掠影2',
          url: require('./images/4.jpg'),
          src: '/peixunlueying1'
        },
        {
          name: '培训掠影3',
          url: require('./images/3.jpg'),
          src: '/peixunlueying1'
        },
        {
          name: '培训掠影4',
          url: require('./images/4.jpg'),
          src: '/peixunlueying1'
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
