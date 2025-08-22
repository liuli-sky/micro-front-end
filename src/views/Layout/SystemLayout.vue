<script lang="ts" setup>
import LayoutAsideMenu from './LayoutAsideMenu.vue'
import LayoutHeaderMenu from './LayoutHeaderMenu.vue'
import LayoutHeaderTab from './LayoutHeaderTab.vue'

const handleDispatchTab = (tab: object) => {
  console.log(tab);
}

</script>

<template>
  <el-container>
    <el-header style="padding: 0;">
      <LayoutHeaderMenu />
    </el-header>

    <el-container>
      <el-aside width="80px">
        <!-- 左侧菜单栏 -->
        <LayoutAsideMenu @dispatch-tab="handleDispatchTab" />
      </el-aside>

      <el-main style="padding: 0;">
        <!-- 主应用路由视图 -->
        <LayoutHeaderTab />
        <router-view />

        <!-- 微应用容器 -->
        <!-- <div id="subapp-container"></div> -->
      </el-main>

    </el-container>
  </el-container>
</template>
