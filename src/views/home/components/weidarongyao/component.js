export default {
  name: 'weidarongyao',
  data() {
    return {
      iscur: 0,
      autoplay: true,
      titleList: [
        {
          title: ''
        },
        {
          title: ''
        },
        {
          title: ''
        },
        {
          title: ''
        }
      ]
    }
  },

  computed: {},

  mounted() {},

  methods: {
    setIscur(index) {
      this.$refs.swipe.swipeTo(index)
      this.iscur = index
    },
    change(index) {
      this.iscur = index
    }
  }
}
