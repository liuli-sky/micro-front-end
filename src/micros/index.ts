import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { registerMicroApps, addGlobalUncaughtErrorHandler, start } from 'qiankun'
import apps from './app'

// 注册微应用
registerMicroApps(apps, {
  beforeLoad: () => {
    NProgress.start()
    return Promise.resolve()
  },
  afterMount: () => {
    NProgress.done()
    return Promise.resolve()
  }
})

// 全局错误监听
addGlobalUncaughtErrorHandler(
  (
    event: Event | Error | string,
    _source?: string,
    _lineno?: number,
    _colno?: number,
    error?: Error
  ) => {
    const message =
      (typeof event === 'string' ? event : (event as Error)?.message) ||
      (error?.message ?? (event as any)?.reason?.message ?? '')
    if (message.includes('died in status LOADING_SOURCE_CODE')) {
      console.error('微应用加载失败，请检查应用是否可运行')
    }
  }
)

// 默认导出 qiankun 的 start
export default start