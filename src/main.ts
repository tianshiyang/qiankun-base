import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import "@/styles/element/element.css" // TODO：目前方案将打包后的ElementCss文件做了前缀替换
import zhCn from "element-plus/lib/locale/lang/zh-cn"
import actions from "@/qiankun/actions"

import { loadMicroApp, MicroApp } from 'qiankun'

createApp(App)
  .use(store)
  .use(ElementPlus, { locale: zhCn })
  .use(router).mount('#app')

let activeMicroApp: MicroApp
// 子应用加载逻辑
router.beforeEach((to, from, next) => {
  if (to.path.startsWith("/vue3")) {
    if (activeMicroApp) {
      activeMicroApp.unmount()
    }
    activeMicroApp = loadMicroApp({
      name: 'qiankun-vue3',
      entry: '//localhost:5000',
      container: '#sub-app',
      props: {
        router, actions
      }
    }, {
      sandbox: {
        // experimentalStyleIsolation: true
      }
    })
  }

  if (to.path.startsWith("/vue2")) {
    if (activeMicroApp) {
      activeMicroApp.unmount()
    }
    activeMicroApp = loadMicroApp({
      name: 'qiankun-vue2', // app name registered
      entry: '//localhost:4000',
      container: '#sub-app',
      props: {
        router, actions
      }
    }, {
      sandbox: {
        // strictStyleIsolation: true
        // experimentalStyleIsolation: true
      }
    })
  }
  next()
})
