import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import { registerMicroApps, start } from 'qiankun'

import 'reset-css' // 重置浏览器标签的样式
import 'normalize.css' // 统一大部分的浏览器的样式

// import '@/assets/icon/iconfont.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)

// 注册子应用
registerMicroApps([
  {
    name: 'base',
    entry: '//localhost:8080',
    container: '#subapp-viewport', // 子应用挂载的容器, 注意要一致
    activeRule: '/base',
  },
])
// 启动微应用
start({
  prefetch: true, // 预加载
  sandbox: { experimentalStyleIsolation: true } // 启用样式隔离
})

// 挂载全局属性
app.use(router).mount('#app')
