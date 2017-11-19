<template>
  <div class="login-wrap">
    <h2 class="title">{{ msg }}</h2>
    <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="Password">
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
        user: '',
        password: '',
      },
      ruleInline: {
        user: [
          { required: true, message: 'Please fill in the user name', trigger: 'blur' },
        ],
        password: [
          { required: true, message: 'Please fill in the password.', trigger: 'blur' },
          { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.loginHandle()
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    /**
     * 发起ajax请求
     */
    loginHandle() {
      this.$ajax.login({userName: this.user, userPwd: this.password}).then((data) => {
        console.log(data)
      }).catch((err) => {
        this.$Message.error(`[${err.code}] : ${err.msg}`)
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