
// 定义环境变量类型
interface ImportMetaEnv {
  VITE_API_BASE_URL: string;
}

// 扩展组件实例类型
declare module 'vue' {
  interface ComponentCustomProperties {
    $filters: {
      dateFormat: (value: Date) => string;
    };
  }
}