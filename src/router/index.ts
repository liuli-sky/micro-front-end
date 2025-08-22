//  router/index.ts
import { createWebHistory, createRouter } from 'vue-router'
import routes from './routes' // 路由配置
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

const router = createRouter({
 history: createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? '/micro-app' : '/'),
 routes: routes
})


// 微应用 router/index.ts
router.beforeEach((to, from, next) => {
  if (window.__POWERED_BY_QIANKUN__ && !to.path.startsWith('/micro-app')) {
    // 在qiankun环境下强制保持路由前缀
    next(`/micro-app${to.path}`)
  } else {
    next()
  }
})

export default router