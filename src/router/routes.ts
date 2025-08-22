const routes = [
  {
    path: '/',
    component: () => import('@/views/Layout/SystemLayout.vue'),
    redirect: '/base',
    children: [
      {
        path: '/base',
        name: 'base',
        component: () => import('@/views/Setting/index.vue'),
        meta: {
          title: '设置中心',
          icon: 'setting',
          mainMenu: false // 是否是主菜单
        }
      },
      {
        // 让 /micro-app 及其子路径渲染包含 #subapp-container 的布局，保证容器存在
        // path: '/micro-app/:pathMatch(.*)*',
        path: '/micro-app',
        name: 'micro-app',
        component: () => import('@/views/SetModel/SetModel.vue'),
        meta: {
          title: '微应用',
          icon: 'aim',
          mainMenu: false // 是否是主菜单
        },
        children: [
          {
            path: '/micro-app/user-management',
            name: 'user-management',
            meta: {
              title: '用户管理',
              icon: 'User',
              mainMenu: true // 是否是主菜单
            }
          },
          {
            path: '/micro-app/role-management',
            name: 'role-management',
            meta: {
              title: '角色管理',
              icon: 'Role',
              mainMenu: true // 是否是主菜单
            }
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/Login/Login.vue'),
    name: 'login'
  }
]

export default routes
