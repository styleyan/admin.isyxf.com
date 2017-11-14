<template>
  <div class="login-wrap">
    <h2 class="title">{{ msg }}</h2>
    <Input v-model="userName" size="large" placeholder="输入用户名"></Input>
    <Input v-model="userPwd" type="password" size="large" placeholder="输入密码"></Input>
    <Button type="primary" @click="loginHandle" long>登录</Button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: '后台登录系统',
      userName: '',
      userPwd: '',
    }
  },
  methods: {
    /**
     * 点击登录
     */
    loginHandle() {
      this.$ajax.login({userName: this.userName, userPwd: this.userPwd}).then((data) => {
        console.log(data)
      }).catch((err) => {
        this.$Message.error(`[${err.code}] : ${err.msg}`)
      })
    },
  },
}
</script>

<style lang="stylus" scoped>
.login-wrap {
    margin: 30px
    .title {
      margin-bottom : 30px
    }
    .ivu-input-wrapper{
      margin-bottom: 20px
    }
  }
</style>
