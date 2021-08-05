<template>
  <div class="app-container">
    <div class="layout-content">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <router-view v-else></router-view>
    </div>
    <div class="layout-footer">
      <TabBar :data="tabbars" @change="handleChange" />
    </div>
  </div>
</template>

<script>
import TabBar from '@/components/TabBar'
export default {
  name: 'AppLayout',
  data() {
    return {
      tabbars: [
        {
          title: '网站首页',
          to: {
            name: 'Home'
          },
          icon: 'home-o'
        },
        {
          title: '培训线路',
          to: {
            name: 'About'
          },
          icon: 'apps-o'
        },
        {
          title: '电话咨询',
          to: {
            name: 'About1'
          },
          icon: 'phone-o'
        },
        {
          title: '返回顶部',
          to: {
            name: 'About2'
          },
          icon: 'back-top'
        }
      ]
    }
  },
  components: {
    TabBar
  },
  methods: {
    handleChange(v) {
      console.log('tab value:', v)
    }
  }
}
</script>
