export default {
  data() {
    return {
      routes: [
        {
          name: '活动1',
          url: require('./images/fangan1.jpg')
        },
        {
          name: '活动2',
          url: require('./images/fangan2.jpg')
        },
        {
          name: '活动3',
          url: require('./images/fangan3.jpg')
        },
        {
          name: '活动4',
          url: require('./images/fangan4.jpg')
        }
      ]
    }
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
