import Swipe from './components/swipe'
import Peixunxianlu from './components/peixunxianlu'
import Sidabaozhang from './components/sidabaozhang'

export default {
  data() {
    return {
      currentIndex: 0
    }
  },

  components: {
    Swipe,
    Peixunxianlu,
    Sidabaozhang
  },

  computed: {},

  mounted() {},

  methods: {
    changeTab(index) {
      this.currentIndex = index
    }
  }
}
