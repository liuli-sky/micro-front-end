const routes = [
  {
    path: '/',
    component: () => import('../views/Layout/SystemLayout.vue'),
    redirect: '/base',
    children: [
      {
        // 👇 非严格匹配，/my-page/* 都指向 MyPage 页面
        path: '/base',
        name: 'base',
        component: () => import('../views/SetModel/SetModel.vue'),
        meta: {
          title: '设置中心',
          icon: 'Setting',
          mainMenu: true // 是否是主菜单
        }
      },
    ]
  },
  {
    path: '/login',
    component: () => import('../views/Login/Login.vue'),
    name: 'login'
  }
]

export default routes
