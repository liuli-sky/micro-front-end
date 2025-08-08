<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  // 处理微应用独立运行和嵌入时的路由问题
  if (window.__POWERED_BY_QIANKUN__) {
    router.push('/micro-app')
  }
})
</script>
