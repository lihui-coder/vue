<template>
  <div class="login_container">
      <div class="login_box">
          <div class="login_avator">
              <img src="../assets/img/xiaonvhai.jpg">
          </div>
          <el-form ref="loginFormRef" :rules="loginFormRules" label-width="0" class="login_form" :model="loginForm">
              <el-form-item prop="username">
                  <el-input v-model="loginForm.username" prefix-icon="el-icon-user-solid" size="medium"></el-input>
              </el-form-item>
               <el-form-item prop="password">
                  <el-input type="password" v-model="loginForm.password" prefix-icon="el-icon-user-solid" size="medium"></el-input>
              </el-form-item>
              <el-form-item class="login_button">
                  <el-button size="mini" type="primary" @click="login" >登录</el-button>
                  <el-button size="mini" type="info" @click="reset">重置</el-button>
              </el-form-item>
          </el-form>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      loginFormRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 5, max: 10, message: '长度在 5 到 10 个字符', trigger: 'blur' }
        ],
        password: [ 
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      // 这里是axios请求，并解构赋值返回得对象
      // this.$refs.loginFormRef.validate(async valid => {
      //   if (!valid) return
      //   const { data: res } = await this.$http.post('login', this.loginForm)
      //   if (res.meta.status !== 200) return this.$message.error('登录失败')
      //   this.$message.success('登陆成功')
      //   console.log(res)
      // window.sessionStorage.setItem('tokoen', res.meta.token)
      this.$router.push('/home')
    },
    reset () {
      this.$refs.loginFormRef.resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  background-color:#517FD3;
  height: 100%;
}
.login_box {
  height: 300px;
  width: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  background-color: #fff;
  transform: translate(-50%,-50%);
  .login_avator {
      width: 80px;
      height: 80px;
      border: 1px solid #eee;
      border-radius: 50%;
      left: 50%;
      position: absolute;
      transform: translate(-50%,-50%);
      padding: 5px;
      box-shadow: 0 0 10px #ddd;
      background-color: #fff;
      img {
          border-radius: 50%;
          height: 100%;
          width: 100%;
          background-color: #eee;
        }
    }
}
.login_form {
  position: absolute;
  top: 20%;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.login_button {
  display: flex;
  justify-content: flex-end;
}
</style>
