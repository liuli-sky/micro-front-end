

<script lang="ts" setup>
import { ref } from 'vue'
import { Select } from '@element-plus/icons-vue'
import type { TabPaneName } from 'element-plus'

const currentTableTabsValue = ref('')
const currentTableTabs = ref([
  {
    title: 'Tab 1',
    name: '1',
  },
  {
    title: 'Tab 2',
    name: '2',
  }
])

const handleTabsEdit = (
  targetName: TabPaneName | undefined,
  action: 'remove' | 'add'
) => {
  if (action === 'remove') {
    const tabs = currentTableTabs.value
    let activeName = currentTableTabsValue.value
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
          const nextTab = tabs[index + 1] || tabs[index - 1]
          if (nextTab) {
            activeName = nextTab.name
          }
        }
      })
    }

    currentTableTabsValue.value = activeName
    currentTableTabs.value = tabs.filter((tab) => tab.name !== targetName)
  }
}
</script>

<template>
  <el-tabs
    v-model="currentTableTabsValue"
    type="card"
    editable
    :addable="false"
    @edit="handleTabsEdit"
    class="layout-header-tab"
  >
    <el-tab-pane
      v-for="item in currentTableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    >
    </el-tab-pane>
  </el-tabs>
</template>

<style lang="scss" scoped>
.layout-header-tab {
  ::v-deep .el-tabs__new-tab {
    display: none !important;
  }

}
</style>