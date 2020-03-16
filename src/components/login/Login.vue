<template>
  <el-container>
    <!--    <el-header></el-header>-->
    <el-main>
      <el-card class="login-card">
        <div slot="header">
          <h1>登录</h1>
        </div>
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="账号：">
            <el-input placeholder="请输入账号" v-model="form.admin"></el-input>
          </el-form-item>
          <el-form-item label="密码：">
            <el-input placeholder="请输入密码" v-model="form.password" show-password></el-input>
          </el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form>
      </el-card>
    </el-main>
    <el-footer>
      <footer>{{footer}}</footer>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      footer: 'Vue Dashboard Copy By Kingsley',
      form: {
        admin: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit() {

    }
  }
}
</script>

<style scoped>
  .login-card {
    padding: 10px;
    width: 500px;
    margin: 0 auto;
  }
  .el-input {
    width: 330px;
  }

  .el-button {
    margin: 0 auto;
  }
</style>
