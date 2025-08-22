const routes = [
  {
    path: '/micro-app',
    name: '',
    component: () => import('@/views/Layout/Layout.vue'),
    children: [
      {
        path: '/user-management',
        name: 'user-management',
        component: () => import('@/views/UserInfo/UserInfo.vue'),
        meta: {
          title: '用户管理',
          icon: 'User',
          mainMenu: true // 是否是主菜单
        }
      },
      {
        path: '/role-management',
        name: 'role-management',
        component: () => import('@/views/RoleInfo/RoleInfo.vue'),
        meta: {
          title: '角色管理',
          icon: 'Role',
          mainMenu: true // 是否是主菜单
        }
      }
    ]
  }
]


export default routes