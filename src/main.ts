import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from "element-plus/lib/locale/lang/zh-cn"

import { registerMicroApps, start } from 'qiankun'

createApp(App)
  .use(store)
  .use(ElementPlus, { locale: zhCn })
  .use(router).mount('#app')

registerMicroApps([
  {
    name: 'qiankun-vue2', // app name registered
    entry: '//localhost:4000',
    container: '#sub-app',
    activeRule: '/vue2'
  },
  {
    name: 'qiankun-vue3',
    entry: '//localhost:5000',
    container: '#sub-app',
    activeRule: '/vue3'
  }
])

start({
  singular: false
})
