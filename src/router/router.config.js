/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/views/layouts'),
    redirect: '/home',
    meta: {
      title: '首页',
      keepAlive: false
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home'),
        meta: { title: '首页', keepAlive: false }
      },
      {
        path: '/peixunxianlu',
        name: 'Peixunxianlu',
        component: () => import('@/views/peixunxianlu'),
        meta: { title: '培训路线', keepAlive: false }
      },
      {
        path: '/peixunlueying',
        name: 'Peixunlueying',
        component: () => import('@/views/peixunlueying'),
        meta: { title: '培训掠影', keepAlive: false }
      },
      {
        path: '/mingshifengcai',
        name: 'Mingshifengcai',
        component: () => import('@/views/mingshifengcai'),
        meta: { title: '名师风采', keepAlive: false }
      },
      {
        path: '/rongyuzizhi',
        name: 'Rongyuzizhi',
        component: () => import('@/views/rongyuzizhi'),
        meta: { title: '荣誉资质', keepAlive: false }
      },
      {
        path: '/xinwendongtai',
        name: 'Xinwendongtai',
        component: () => import('@/views/xinwendongtai'),
        meta: { title: '新闻动态', keepAlive: false }
      },
      {
        path: '/guanyuwomen',
        name: 'Guanyuwomen',
        component: () => import('@/views/guanyuwomen'),
        meta: { title: '关于我们', keepAlive: false }
      },
      {
        path: '/lianxiwomen',
        name: 'Lianxiwomen',
        component: () => import('@/views/lianxiwomen'),
        meta: { title: '联系我们', keepAlive: false }
      }
    ]
  }
]
