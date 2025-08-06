<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ArrowDown } from '@element-plus/icons-vue'

const userInfo = computed(() =>
  JSON.parse(localStorage.getItem('userInfo') || '{}')
)

const router = useRouter()
/**
 * 退出登录
 */
const logout = async () => {
  try {
    localStorage.removeItem('tokenInfo')
    localStorage.removeItem('userInfo')
    router.push('/login')
  } finally {
  }
}

/**
 * 修改密码
 */
const handleEditPassword = () => {}

</script>

<template>
  <div class="header-bar">
    <div></div>
    <div class="header-bar-user">
      <el-dropdown>
        <span class="el-dropdown-link">
          {{ `您好，${userInfo.username || '-'}` }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
            <el-dropdown-item @click="handleEditPassword"
              >修改密码</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-bar {
  height: 60px;
  background: #edf3ff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  color: #222;
  font-size: 22px;
  font-weight: 800;
}

.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
