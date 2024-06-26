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
    entry: process.env.NODE_ENV === 'production' ? '/vue3-app/' : '//localhost:5005',
    container: '#sub-app',
    activeRule: "vue3",
    props: {
      router
    }
  },
  {
    name: 'qiankun-vue2', // app name registered
    entry: '//localhost:4000',
    container: '#sub-app',
    activeRule: "vue2",
    props: {
      router
    }
  }
])
// 启动 qiankun
start()
