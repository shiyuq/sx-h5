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

  // async created() {
  //   const res = await service.getAddressList()
  //   console.log('res1111111111 :>> ', res)
  // },

  computed: {},

  mounted() {},

  methods: {
  }
}
