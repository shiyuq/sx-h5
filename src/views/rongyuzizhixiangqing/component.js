export default {
  data() {
    return {
      rongyu: [
        {
          name: '荣誉1',
          url: require('./images/1.jpg')
        },
        {
          name: '荣誉2',
          url: require('./images/1.jpg')
        },
        {
          name: '荣誉3',
          url: require('./images/1.jpg')
        },
        {
          name: '荣誉4',
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
