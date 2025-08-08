const apps = [
  {
    name: 'micro-app', // 微应用的名称，微应用一定要与这个name对应
    entry: '//localhost:5051', // 微应用运行的域名加端口
    container: '#container', // 子应用挂载的容器, 注意要一致
    activeRule: '/micro-app', // 触发启动微应用的规则，当检测到url中含有activeRule的值时
    props: {
      // 可传递主应用上下文
      mainAppRoot: document.getElementById('root')
    }
  },
];
export default apps;
