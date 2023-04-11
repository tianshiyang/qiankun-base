import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/qiankun-home',
    children: [
      {
        path: "qiankun-home",
        name: "pageHome",
        component: () => import("@/views/qiankunHome.vue")
      }, {
        path: "home-one-page",
        name: "homeOnePage",
        component: () => import("@/views/homeOnePage.vue")
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
