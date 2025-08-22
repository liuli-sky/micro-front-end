<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { Menu as ElIconMenu, Setting, User, Grid, Aim, Histogram } from '@element-plus/icons-vue'

const iconMap = { menu: ElIconMenu, setting: Setting, user: User, grid: Grid, histogram: Histogram, aim: Aim }

const router = useRouter()
const route = useRoute()
const activePath = ref(route.path)

const handleChangeMenu = (info: { path: String }) => {
  activePath.value = info.path
  router.push(info.path)
  emit('dispatch-tab', { title: info.meta.title, name: info.path })
}

const menuList = router.options.routes[0] // 直接使用而不需要computed

const emit = defineEmits<{
  (event: 'dispatch-tab', info: object): void
}>()
</script>

<template>
  <el-menu :default-active="activePath" class="el-menu-vertical-demo" :collapse="true">
    <div v-for="item in menuList.children" :key="item.path">
      <el-sub-menu v-if="item.children?.length" :index="item.path">
        <template #title>
          <component :is="iconMap[item.meta?.icon] || ElIconMenu" class="menu-icon" size="16px" />
        </template>
        <el-menu-item v-for="child in item.children" :key="child.path" :index="child.path" @click="handleChangeMenu(child)">
          {{ child.meta?.title }}
        </el-menu-item>
      </el-sub-menu>

      <el-menu-item v-else :index="item.path" @click="handleChangeMenu(item)">
        <component :is="iconMap[item.meta?.icon] || ElIconMenu" class="menu-icon" size="16px" />
        <template #title>{{ item.meta?.title }}</template>
      </el-menu-item>
    </div>
  </el-menu>
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 120px;
  height: calc(100vh - 90px);
}
</style>