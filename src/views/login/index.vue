<template>
  <div class="login-wrap">
    <h2 class="title">{{ msg }}</h2>
    <Form ref="formInline" :model="formInline" :rules="ruleInline">
      <FormItem prop="userName">
        <Input type="text" v-model="formInline.userName" placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="userPwd">
        <Input type="password" v-model="formInline.userPwd" placeholder="Password">
          <Icon type="ios-locked-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formInline')" long>登录</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: '登录',
      formInline: {
        userName: 'yxf',
        userPwd: 'dddd11150923',
      },
      ruleInline: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        userPwd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码不能少于6位', trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.login()
        } else {
          this.$Message.error('请输入用户名和密码!')
        }
      })
    },
    /**
     * 发起ajax请求
     */
    login() {
      this.$ajax.adminLogin({userName: this.formInline.userName, userPwd: this.formInline.userPwd}).then((data) => {
        this.$router.push({name: 'admin'})
      }).catch((err) => {
        this.$Message.error(`[${err.code}] : ${err.errorMsg}`)
      })
    },
  },
}
</script>
<style lang="stylus">
.login-wrap {
  margin: 150px auto 0 auto
  width: 320px
  .title {
    margin-bottom : 30px
    text-align: center
  }
}

</style>