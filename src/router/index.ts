//  router/index.ts
import { createWebHistory, createRouter } from 'vue-router'
import routes from './routes' // 路由配置

const router = createRouter({
 history: createWebHistory('/micro-app'),
 routes: routes
})

let microPath: string = ''

if (window.__POWERED_BY_QIANKUN__) {
  microPath = '/micro-app'
}


// 路由权限配置
// router.beforeEach((to, from, next) => {
//  const hasAlreadyLogin = localStorage.getItem('tokenInfo')
//  if (!hasAlreadyLogin && to.name !== 'login') {
//    next({ name: microPath + '/login' })
//  } else if (hasAlreadyLogin && to.name === 'login') {
//    next({ name: microPath + '/base' })
//  } else {
//    if (to.path === '/') {
//      next({ name: microPath  + '/base' })
//    } else {
//      next()
//    }
//  }
// })
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