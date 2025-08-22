import { createApp, type App as VueApp } from 'vue'
import App from './App.vue'
import router from './router'
import { renderWithQiankun, qiankunWindow, type QiankunProps } from 'vite-plugin-qiankun/dist/helper'

let app: VueApp | null = null

function render(props?: QiankunProps) {
  const { container } = props || {}
  app = createApp(App)
  app.use(router)

  // 独立运行时挂到 #app，微前端模式下直接挂到主应用传入的容器
  const mountEl = container ? (container as Element) : (document.getElementById('app') as Element)
  app.mount(mountEl)
}

renderWithQiankun({
  bootstrap() {},
  mount(props) { render(props) },
  unmount() {
    app?.unmount()
    app = null
  },
  update() {}
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render()
}