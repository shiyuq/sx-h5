// 按需全局引入 vant组件
import Vue from 'vue'
import {
  Button,
  List,
  Cell,
  Tabbar,
  TabbarItem,
  Icon,
  Sticky,
  Popup,
  Swipe, SwipeItem,
  Image,
  Col, Row,
  Grid, GridItem,
  // Lazyload,
  Divider
} from 'vant'

Vue.use(Button)
Vue.use(Cell)
Vue.use(List)
Vue.use(Icon)
Vue.use(Sticky)
Vue.use(Popup)
Vue.use(Swipe).use(SwipeItem)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Image)
Vue.use(Col).use(Row)
Vue.use(Grid).use(GridItem)
// Vue.use(Lazyload)
Vue.use(Divider)
