import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Menu from "@/components/Menu/index.vue"
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/qiankun-home',
    // component: Menu,
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
