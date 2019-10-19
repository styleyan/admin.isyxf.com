<template>
  <div style="overflow:hidden; height: 100%">
    <canvas id="evanyou"></canvas>
    <el-form
      @submit.native.prevent
      class="login-page demo-ruleForm"
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px">
      <el-form-item label="账户" prop="userName">
        <el-input type="text" v-model="ruleForm.userName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="btn-submit" native-type="submit" type="primary" @click="submitForm('ruleForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import changeBg from '../../utils/changeBg'

export default {
  name: 'login',
  data() {
    const validateUser = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入账号'))
      } else {
        callback()
      }
    }

    const validatePass = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入密码'))
      } else if (value.trim().length < 6) {
        callback(new Error('密码不能少于6位'))
      } else {
        callback()
      }
    }

    return {
      ruleForm: {
        userName: '',
        password: '',
      },
      rules: {
        userName: [
          { validator: validateUser, trigger: 'blur' },
        ],
        password: [
          { validator: validatePass, trigger: 'blur' },
        ],
      },
    }
  },
  mounted() {
    changeBg()
  },
  methods: {
    /**
     * 校验
     */
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.submitData()
        } else {
          return false
        }
      })
    },

    /**
     * 提交数据
     */
    submitData() {
      this.$axios.userLogin(this.ruleForm).then(() => {
        this.$router.push({ name: 'index' })
      }).catch(() => {})
    },
  },
}
</script>
<style lang="stylus">
.login-page{
  width: 500px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -280px;
  margin-top: -88px;

  .btn-submit{
    display block
    width 100%
  }
}
</style>
