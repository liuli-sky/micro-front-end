<script lang="ts" setup>
import type { LoginParams } from '@/api/type/login'
import { useRouter } from 'vue-router'
import { UserFilled, Lock } from '@element-plus/icons-vue'
import { FormInstance } from 'element-plus'

const userForm = ref<LoginParams>({
  username: '',
  password: '',
  validateCode: ''
})

const rules = {
  username: [{ required: true, message: '请输入账号', trigger: 'change' }],
  password: [{ required: true, message: '请输入密码', trigger: 'change' }],
  validateCode: [{ required: true, message: '请输入验证码', trigger: 'change' }]
}

const router = useRouter()
const loginRef = ref<FormInstance>()

// 登录
const handleLoginSystem = async () => {
  try {
    // 进行用户登录验证
    await loginRef.value?.validate()
    localStorage.setItem(
      'tokenInfo',
      JSON.stringify({
        access_token:
          'eyJ0b2tlbl90eXBlIjoiX2FjY2Vzc190b2tlbiIsImFsZyI6IkhTNTEyIn0.eyJ1c2VyaWQiOiI4MzIzMDgyMzc2MzMwNTY3NjgiLCJ1c2VybmFtZSI6IjEzMTIzMjgwNjI5IiwiZXhwIjoxNzc0OTQ3MjU4fQ.tjUnE8wdpfDn1ghVXnhVQxZuMlB3VmDSYTOTLG8Wq_SPMJVmY6HxVxBSS3oPf0REULRN_CcAAkcUyerbBFh0WQ',
        expires_in: 29030400000,
        name: '13123280629',
        refresh_token:
          'eyJ0b2tlbl90eXBlIjoiX3JlZnJlc2hfdG9rZW4iLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyaWQiOiI4MzIzMDgyMzc2MzMwNTY3NjgiLCJ1c2VybmFtZSI6IjEzMTIzMjgwNjI5IiwiZXhwIjoxNzc0OTQ3MjU4fQ.fB2EgkHEjoAnrIB4VVTGtEp4zecHKvg74AxxlSLFS2B8ZYLAIxWSEsVUMOuklUtXpe3QPCa5RFrxEprTejSGoA',
        userid: '832308237633056768'
      })
    )
    localStorage.setItem(
      'userInfo',
      JSON.stringify({
        ...userForm.value
      })
    )
    router.push('/')
  } finally {
    //
  }
}
</script>

<template>
  <div class="login-page">
    <div class="login-page__container">
      <div class="login-page__container-title">登入</div>
      <el-form
        ref="loginRef"
        class="login-page-form-content-login"
        :model="userForm"
        :rules="rules"
      >
        <el-form-item prop="username">
          <el-input
            v-model="userForm.username"
            clearable
            :prefix-icon="UserFilled"
            placeholder="请输入账号"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="userForm.password"
            placeholder="请输入密码"
            show-password
            type="password"
            clearable
            :prefix-icon="Lock"
          />
        </el-form-item>
        <el-form-item prop="validateCode">
          <div
            style="display: flex; align-items: center; gap: 10px; width: 100%"
          >
            <el-input
              v-model="userForm.validateCode"
              placeholder="请输入验证码"
              clearable
            />
          </div>
        </el-form-item>
        <el-button
          type="primary"
          style="width: 100%"
          @click="handleLoginSystem"
        >
          登 录
        </el-button>
        <div
          style="padding: 10px 0; color: #666; font-size: 12px; cursor: pointer"
        >
          忘记密码
        </div>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #000;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: end;

  &::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at 50% 50%,
      rgba(255, 255, 255, 0.8) 0.5px,
      rgba(255, 255, 255, 0.2) 1px,
      transparent 2px
    );
    background-size: 200px 200px;
    animation: rotate 200s linear infinite;
    opacity: 0.8;
    transform-origin: 50% 50%;
  }

  // 创建随机分布的星星
  @for $i from 1 through 80 {
    &::after {
      content: '';
      position: absolute;
      top: random(10000) * 0.01%;
      left: random(10000) * 0.01%;
      width: #{0.4 + random(3) / 10}px;
      height: #{0.4 + random(3) / 10}px;
      background: rgba(255, 255, 255, 0.8);
      border-radius: 50%;
      animation: twinkle #{2 + random(8) s ease-in-out infinite},
        move #{50 + random(100) s} linear infinite;
      opacity: 0;
    }
  }

  &__container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column;
    z-index: 1;
    width: min(25%, 1160px);
    height: min(35%, 650px);
    border-radius: 28px;
    box-shadow: 0px 4px 20px 0px rgba(228, 223, 223, 0.1);
    background: rgb(227, 227, 228);
    overflow: hidden;
    margin-right: 10%;

    &-title {
      text-align: center;
      font-size: 32px;
      font-weight: 500;
      color: #6b6a6a;
      line-height: 2;
    }
  }

  // 设置动画效果
  @keyframes rotate {
    from {
      transform: rotate(0deg) scale(1);
    }
    to {
      transform: rotate(360deg) scale(1.2);
    }
  }

  @keyframes twinkle {
    0%,
    100% {
      opacity: 0;
      transform: scale(1);
    }
    50% {
      opacity: 0.8;
      transform: scale(2.5);
    }
  }

  @keyframes move {
    0% {
      transform: translateX(0, 0);
    }
    100% {
      transform: translate(random(100) - 50 + vm, random(100) - 50 + vh);
    }
  }
}
</style>
