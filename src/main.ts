import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import 'reset-css' // 重置浏览器标签的样式
import 'normalize.css' // 统一大部分的浏览器的样式

import start from './micros' // 微应用服务设置

// import '@/assets/icon/iconfont.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)


// 挂载全局属性
app.use(router).mount('#app')


// 启动微应用
start({
  prefetch: true, // 预加载
  sandbox: { experimentalStyleIsolation: true } // 启用样式隔离
})