import LueyingService from '../../api/camera-service'

export default {
  data() {
    return {
      routes: [],
      currentPage: 1,
      totalCount: 0,
      loading: false,
      finished: false
      // lueying: [
      //   {
      //     name: '培训掠影1',
      //     url: require('./images/3.jpg'),
      //     src: '/peixunlueying1'
      //   },
      //   {
      //     name: '培训掠影2',
      //     url: require('./images/4.jpg'),
      //     src: '/peixunlueying1'
      //   },
      //   {
      //     name: '培训掠影3',
      //     url: require('./images/3.jpg'),
      //     src: '/peixunlueying1'
      //   },
      //   {
      //     name: '培训掠影4',
      //     url: require('./images/4.jpg'),
      //     src: '/peixunlueying1'
      //   }
      // ]
    }
  },
  created() {
    this.getData()
  },
  mounted() {
  },
  methods: {
    gotoMenu() {
      this.$router.go(-1)
      // this.$router.go('/home')
    },
    
    loadMore() {
      this.currentPage += 1
      this.getData({ offset: (this.currentPage - 1) * 10 })
    },

    async getData(params = {}) {
      this.loading = true
      const { limit = 10, offset = 0 } = params
      const { data } = await LueyingService.getLueying({ limit, offset })
      this.totalCount = data && data.totalCount
      this.routes = this.routes.concat((data && data.items) || [])
      if (this.totalCount <= this.routes.length) {
        this.finished = true
      }
      this.loading = false
    }
  }
}
{/* <div class="pic">
<div v-for="(lueying, index) in lueying" :key="index" class="lueying-container">
 <router-link :to="lueying.src" :title="lueying.name">
 <div class="lueying-single">
   <img :src="lueying.url" alt="" />
   <span>{{ lueying.name }}</span>
 </div>
 </router-link>
</div>
</div> */}