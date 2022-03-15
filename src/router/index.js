import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: '首页',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },

  {
    path: '/yygh/hospset',
    component: Layout,
    redirect: '/yygh/hospset/list',
    name: '医院管理',
    meta: { title: '医院管理', icon: 'el-icon-s-marketing' },
    children: [
      {
        path: 'list',
        name: '医院设置列表',
        component: () => import('@/views/yygh/hospset/list.vue'),
        meta: { title: '医院设置列表' }
      },
      {
        path: 'save',
        name: '医院设置添加',
        component: () => import('@/views/yygh/hospset/save.vue'),
        meta: { title: '医院设置添加' }
      },
      {
        path: 'edit/:id',
        name: '医院设置修改',
        component: () => import('@/views/yygh/hospset/save.vue'),
        meta: { title: '医院设置修改' },
        hidden: true // 隐藏
      }
    ]
  },

  {
    path: '/cmn',
    component: Layout,
    redirect: '/cmn/list',
    name: '数据管理',
    alwaysShow: true,
    meta: { title: '数据管理', icon: 'example' },
    children: [
      {
        path: 'list',
        name: '数据字典列表',
        component: () => import('@/views/yygh/dict/list.vue'),
        meta: { title: '数据字典', icon: 'table' }
      }
    ]
  },

  {
    path: '/hosp',
    component: Layout,
    redirect: '/hosp/list',
    name: '医院信息',
    alwaysShow: true,
    meta: { title: '医院信息', icon: 'example' },
    children: [
      {
        path: 'list',
        name: '医院列表',
        component: () => import('@/views/yygh/hosp/list.vue'),
        meta: { title: '医院列表', icon: 'table' }
      },
      {
        path: 'show/:id',
        name: '医院详情',
        component: () => import('@/views/yygh/hosp/show.vue'),
        meta: { title: '医院详情', noCache: true },
        hidden: true
      },
      {
        path: 'schedule/:hoscode',
        name: '排班',
        component: () => import('@/views/yygh/hosp/schedule.vue'),
        meta: { title: '排班', noCache: true },
        hidden: true
      }
    ]
  },

  {
    path: '/user',
    component: Layout,
    redirect: '/user/userInfo/list',
    name: '用户管理',
    meta: { title: '用户管理', icon: 'table' },
    alwaysShow: true,
    children: [
      {
        path: 'userInfo/list',
        name: '用户列表',
        component: () => import('@/views/yygh/userInfo/list'),
        meta: { title: '用户列表', icon: 'table' }
      },
      {
        path: 'userInfo/authList',
        name: '认证审批列表',
        component: () => import('@/views/yygh/userInfo/authList'),
        meta: { title: '认证审批列表', icon: 'table' }
      },
      {
        path: 'userInfo/show/:id',
        name: '用户查看',
        component: () => import('@/views/yygh/userInfo/show'),
        meta: { title: '用户查看' },
        hidden: true
      }
    ]
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
