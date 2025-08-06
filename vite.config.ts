import { defineConfig, loadEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import styleImport, { ElementPlusResolve } from 'vite-plugin-style-import'

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
    })
  ],
  resolve: { // 配置别名，简化路径引用
    alias: {
      '@': resolve('/src')
    }
  },
  server: {
    port: 5000, // 端口
    cors: true, // 跨域
    origin: 'http://localhost:5000', // 允许跨域请求的域名
    proxy: { // 设置API代理，解决跨域问题
      '/api': {
        target: config.VITE_API_BASE_URL
      },
      '/sub-vue3/': { // 测试代理
        target: 'http://localhost:7101',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/sub-vue3/, '')
      }
    },
    hmr: true, // 热更新

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
