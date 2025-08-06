const apps = [
  {
    name: 'micro-app', // 微应用的名称，微应用一定要与这个name对应
    entry: '//localhost:5051', // 微应用运行的域名加端口
    container: '#subapp-viewport', // 子应用挂载的容器, 注意要一致
    activeRule: '/micro-app' // 触发启动微应用的规则，当检测到url中含有activeRule的值时
  },
];
export default apps;
