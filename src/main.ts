import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/src/index.scss'
import zhCn from "element-plus/lib/locale/lang/zh-cn"

import { registerMicroApps, start } from 'qiankun'

createApp(App)
  .use(store)
  .use(ElementPlus, { locale: zhCn })
  .use(router).mount('#app')

registerMicroApps([
  {
    name: 'qiankun-vue3',
    entry: "http://62.234.16.180/vue3/",
    container: '#sub-app',
    activeRule: "/qiankun-vue3",
    props: {
      router
    }
  },
  {
    name: 'vue2', // app name registered
    entry: 'http://62.234.16.180/vue2/',
    container: '#sub-app',
    activeRule: "/qiankun-vue2",
    props: {
      router
    }
  }
])
// 启动 qiankun
start({
  sandbox: {
    experimentalStyleIsolation: true
  }
})
