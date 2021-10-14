export default {
  name: 'TabBar',
  props: {
    defaultActive: {
      type: Number,
      default: 0
    },
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      active: this.defaultActive
    }
  },
  watch: {
    '$route': 'changeActive'
  },
  created() {
    this.changeActive(this.$route)
  },
  methods: {
    handleChange(value) {
      this.$emit('change', value)
    },
    changeActive(val) {
      if (val.path === '/') {
        this.active = 0
      } else {
        const index = this.data.findIndex(item => val.path.indexOf(item.to) > -1)
        if (index >= 0) {
          this.active = index
        } else {
          this.active = 0
        }
      }
    }
  }
}
