let microPath: string = ''

if (window.__POWERED_BY_QIANKUN__) {
  microPath = '/micro-app'
}

const routes = [
  {
    path: microPath + '/login',
    component: () => import('../views/UserInfo/UserInfo.vue'),
    name: 'login'
  }
]


export default routes