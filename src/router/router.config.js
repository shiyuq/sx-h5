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
        path: '/about',
        name: 'About',
        component: () => import('@/views/about'),
        meta: { title: '关于我', keepAlive: false }
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
