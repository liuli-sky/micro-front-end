import NProgress from "nprogress";
import "nprogress/nprogress.css";
import {
  registerMicroApps,
  addGlobalUncaughtErrorHandler,
  start,
} from "qiankun";// 微应用注册信息
import apps from "./app";

/**
 * 注册微应用
 *
 * params1: 微应用注册信息
 * params2: 微应用生命周期钩子
 *
 */
registerMicroApps(apps, {
  beforeLoad: (app) => {
    console.log("before load", app.name);
    // 加载微应用前，加载进度条
    NProgress.start();
    return Promise.resolve();
  },
  afterMount: (app) => {
    // 加载微应用前，进度条加载完成
    console.log("after mount", app.name);
    NProgress.done();
    return Promise.resolve();
  },
});

/**
 * 全局的未捕获异常处理器，微应用发生报错的时候亦可以用这个api捕捉
 *
 */
addGlobalUncaughtErrorHandler((event) => {
  const { message } = event
  if (message && message.includes("died in status LOADING_SOURCE_CODE")) {
    console.error("this:::::::微应用加载失败，请检查应用是否可运行");
  }
});

// 启动应用
export default start;