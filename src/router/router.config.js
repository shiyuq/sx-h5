/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    component: () => import('../views/layouts'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/home'),
        meta: { title: '首页', keepAlive: false }
      },
      {
        path: '/home',
        redirect: '/',
        component: () => import('../views/home'),
        meta: { title: '首页', keepAlive: false }
      },
      {
        path: '/peixunxianlu',
        name: 'Peixunxianlu',
        redirect: '/',
        component: () => import('../views/trainsEnter'),
        meta: { title: '培训路线', keepAlive: false },
        children: [
          {
            path: '/',
            name: 'TrainsList',
            component: () => import('../views/peixunxianlu'),
            meta: { title: '培训线路', keepAlive: false }
          },
          {
            path: '/peixunxianlu/:id',
            name: 'TrainsDetail',
            component: () => import('../views/peixunxianluDetail'),
            meta: { title: '培训线路详情', keepAlive: false }
          }
        ]
      },
      {
        path: '/peixunlueying',
        name: 'Peixunlueying',
        component: () => import('../views/peixunlueying'),
        meta: { title: '培训掠影', keepAlive: false }
      },
      {
        path: '/guanyuwomen',
        name: 'Guanyuwomen',
        component: () => import('../views/guanyuwomen'),
        meta: { title: '关于我们', keepAlive: false }
      },
      {
        path: '/lianxiwomen',
        name: 'Lianxiwomen',
        component: () => import('../views/lianxiwomen'),
        meta: { title: '联系我们', keepAlive: false }
      },
      {
        path: '/rongyuzizhi',
        name: 'Rongyuzizhi',
        component: () => import('../views/rongyuzizhi'),
        meta: { title: '荣誉资质', keepAlive: false }
      },
      {
        path: '/rongyuzizhixiangqing',
        name: 'Rongyuzizhixiangqing',
        component: () => import('../views/rongyuzizhixiangqing'),
        meta: { title: '荣誉资质详情', keepAlive: false }
      },
      {
        path: '/xinwendongtai',
        name: 'Xinwendongtai',
        redirect: '/',
        component: () => import('../views/newsEnter'),
        children: [
          {
            path: '/',
            name: 'NewsList',
            component: () => import('../views/news'),
            meta: { title: '新闻动态', keepAlive: false }
          },
          {
            path: '/xinwendongtai/:id',
            name: 'NewsDetail',
            component: () => import('../views/newsDetail'),
            meta: { title: '新闻动态详情', keepAlive: false }
          }
        ]
      },
      {
        path: '/mingshifengcai',
        name: 'Mingshifengcai',
        component: () => import('../views/mingshifengcai'),
        meta: { title: '名师风采', keepAlive: false }
      },
      // {
      //   path: '/peixunlueying1',
      //   name: 'Peixunlueying1',
      //   component: () => import('../views/mingshidetail'),
      //   meta: { title: '培训掠影1', keepAlive: false }
      // }
      {
        path: '/qiyejianjie',
        name: 'Qiyejieshao',
        component: () => import('../views/companyProfile'),
        meta: { title: '企业简介', keepAlive: false }
      },
      {
        path: '/qiyewenhua',
        name: 'Qiyewenhua',
        component: () => import('../views/companyCulture'),
        meta: { title: '企业文化', keepAlive: false }
      },
      {
        path: '/peixunjidi',
        name: 'Peixunjidi',
        component: () => import('../views/productionBase'),
        meta: { title: '培训基地', keepAlive: false }
      },
      {
        path: '/rencaizhaopin',
        name: 'Rencaizhaopin',
        component: () => import('../views/talents'),
        meta: { title: '人才招聘', keepAlive: false }
      }
    ]
  }
]
