//  router/index.ts
import { createWebHistory, createRouter } from 'vue-router'
import routes from './routes' // 路由配置

const router = createRouter({
 history: createWebHistory(),
 routes: routes
})

let microPath: string = ''

if (window.__POWERED_BY_QIANKUN__) {
  microPath = '/micro-app'
}


// 路由权限配置
router.beforeEach((to, from, next) => {
 const hasAlreadyLogin = localStorage.getItem('tokenInfo')
 if (!hasAlreadyLogin && to.name !== 'login') {
   next({ name: 'login' })
 } else if (hasAlreadyLogin && to.name === 'login') {
   next({ name: 'base' })
 } else {
   if (to.path === '/') {
     next({ name: microPath  + '/base' })
   } else {
     next()
   }
 }
})

export default router