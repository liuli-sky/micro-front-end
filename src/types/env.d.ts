
// 定义环境变量类型
interface ImportMetaEnv {
  VITE_API_BASE_URL: string;
}

// 扩展组件实例类型（Vue3 需要扩展 @vue/runtime-core）
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $filters: {
      dateFormat: (value: Date) => string;
    };
  }
}

export {}