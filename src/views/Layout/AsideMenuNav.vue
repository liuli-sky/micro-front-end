<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  Share
} from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}

// 更改折叠方式
const handleChangeCollapse = () => {
  // isCollapse.value = !isCollapse.value
}

const handleChangeMenu = (path: string) => {
  activePath.value = path
  router.push(path)
}

onMounted(() => {
  activePath.value =
    (router.currentRoute.value.meta?.lockMenu as string) ||
    router.currentRoute.value.path
})

const activePath = ref('/user-info') // 当前激活的菜单

// menu list
const menuList = router.options.routes[0]
</script>

<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
    @click="handleChangeCollapse"
  >
    <el-sub-menu
      v-for="(item, index) in menuList.children"
      :key="item.path"
      :index="index"
      @click="handleChangeMenu(item.path)"
    >
      <template #title>
        <el-icon color="#409EFC" class="no-inherit">
          <Setting />
        </el-icon>
        <span>{{ item.meta?.title }}</span>
      </template>
    </el-sub-menu>
  </el-menu>
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 250px;
  min-height: 100vh;
}
</style>
