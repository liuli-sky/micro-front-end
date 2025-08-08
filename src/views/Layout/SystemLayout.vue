<script lang="ts" setup>
import LayoutAsideMenu from './LayoutAsideMenu.vue'
import LayoutHeaderMenu from './LayoutHeaderMenu.vue'
</script>

<template>
  <el-container>
    <el-header style="padding: 0;">
      <LayoutHeaderMenu />
    </el-header>

    <el-container style="padding: 0;">
      <el-aside width="220px">
        <!-- <LayoutAsideMenu /> -->
        <router-link to="/micro-app">Child Home</router-link>
      </el-aside>

      <el-main>
        <!-- 主应用路由视图 -->
        <router-view />

        <!-- 微应用容器 -->
        <!-- <div id="container"></div> -->
        <div id="container" v-show="$route.path.startsWith('/micro-app')"></div>
      </el-main>

    </el-container>
  </el-container>
</template>
