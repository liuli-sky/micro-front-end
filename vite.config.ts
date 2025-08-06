import { defineConfig, loadEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import styleImport, { ElementPlusResolve } from 'vite-plugin-style-import'
``
// import qiankun from 'vite-plugin-qiankun'

import path from 'path'
const resolve = (dir: string) => path.join(__dirname, dir)

const config = loadEnv('development', './')


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    Vue(), // 启用Vue内置API
    Components({ // 自动注册组件
      resolvers: [ElementPlusResolver(), IconsResolver()]
    }),
    Icons({ // 引入icon组件
      autoInstall: true
    }),
    AutoImport({ // 自动导入 vue的内置API
      imports: ['vue', 'vue-router'],
      dts: 'src/auto-import.d.ts'
    }),
    styleImport({ // 按需引入element-plus组件样式
      resolves: [ElementPlusResolve()]
    }),
    // qiankun('micro-app', { // 必须与主应用注册的name一致
    //   useDevMode: true
    // })
  ],
  base: '/micro-app/', // 必须与主应用activeRule一致
  resolve: { // 配置别名，简化路径引用
    alias: {
      '@': resolve('/src')
    }
  },
  server: {
    port: 5051, // 端口
    cors: true, // 跨域
    proxy: { // 设置API代理，解决跨域问题
      '/api': {
        target: config.VITE_API_BASE_URL
      }
    },
    hmr: true, // 热更新
    disableHostCheck: true, // 关闭主机检查，使微应用可以被 fetch
    headers: { // 配置跨域请求头，解决开发环境的跨域问题
      "Access-Control-Allow-Origin": "*",
    },
  },
  build: {
    rollupOptions: { // 代码拆分成单独的chunk，以优化加载性能
      output: {
        manualChunks: {
          vue: ['vue', 'vue-router', 'pinia'],
          element: ['element-plus']
        }
      }
    }
  }
})
