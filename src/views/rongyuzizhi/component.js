export default {
  data() {
    return {
      rongyu: [
        {
          id: '01',
          title: '荣誉1',
          url: require('./images/1.jpg'),
          src: '/rongyuzizhixiangqing'
        },
        {
          id: '02',
          title: '荣誉2',
          url: require('./images/1.jpg'),
          src: '/rongyuzizhixiangqing'
        },
        {
          id: '03',
          title: '荣誉3',
          url: require('./images/1.jpg'),
          src: '/rongyuzizhixiangqing'
        },
        {
          id: '04',
          title: '荣誉4',
          url: require('./images/1.jpg'),
          src: '/rongyuzizhixiangqing'
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
