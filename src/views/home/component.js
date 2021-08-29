import Swipe from './components/swipe'
import Peixunxianlu from './components/peixunxianlu'
import Sidabaozhang from './components/sidabaozhang'
import About from './components/about'
import Gemingjingshen from './components/gemingjingshen'
import Dianhuazixun from '../dianhuazixun'
import Gongsixinwen from './components/gongsixinwen'

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
    Dianhuazixun,
    Gongsixinwen
  },

  computed: {},

  mounted() {},

  methods: {
    changeTab(index) {
      this.currentIndex = index
    }
  }
}
