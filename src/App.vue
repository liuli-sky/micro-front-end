
<template>
<el-config-provider size="default">
    <router-view />
  </el-config-provider>
</template>

<style>
:root,
#app {
  width: 100vw;
  min-width: 1200px;
  height: 100vh;
  overscroll-behavior: none;
  scroll-behavior: smooth;
}

::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
