import Swipe from './components/swipe'
import Peixunxianlu from './components/peixunxianlu'
import Sidabaozhang from './components/sidabaozhang'
import About from './components/about'
import Gemingjingshen from './components/gemingjingshen'
import Dianhuazixun from '../dianhuazixun'

export default {
  data() {
    return {
      currentIndex: 0
    }
  },

  components: {
    Swipe,
    Peixunxianlu,
    Sidabaozhang,
    About,
    Gemingjingshen,
    Dianhuazixun
  },

  computed: {},

  mounted() {},

  methods: {
    changeTab(index) {
      this.currentIndex = index
    }
  }
}
