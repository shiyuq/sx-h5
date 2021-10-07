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
  Divider,
  NavBar,
  Pagination,
  Search,
  Tab,
  Tabs,
  CellGroup,
  Field,
  Toast
} from 'vant'

Vue.use(Button)
Vue.use(Cell).use(CellGroup)
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
Vue.use(NavBar)
Vue.use(Pagination)
Vue.use(Search)
Vue.use(Tab).use(Tabs)
Vue.use(Field)
Vue.use(Toast)
