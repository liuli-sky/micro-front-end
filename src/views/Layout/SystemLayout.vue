<script lang="ts" setup>
import AsideMenuNav from './AsideMenuNav.vue'
import HeaderMenuNav from './HeaderMenuNav.vue'
</script>

<template>
  <div class="system">
    <HeaderMenuNav />
    <div class="system-container">
      <AsideMenuNav />
      <div class="system-container__content">
        <!-- 主应用路由视图 -->
        <!-- <router-view/> -->

        <!-- 微应用容器 -->
        <div id="subapp-viewport"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.system {
  &-container {
    display: flex;

    &__content {
      flex: 1;
      overflow: hidden;
    }
  }
}
</style>
