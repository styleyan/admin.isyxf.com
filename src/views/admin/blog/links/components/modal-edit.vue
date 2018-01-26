<template>
  <Modal
    v-model="modal"
    :title="title"
    :loading="loading"
    @on-ok="asyncOK">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="50">
      <Form-item label="名称" prop="websiteName">
        <Input v-model="formValidate.websiteName" placeholder="请输入..."></Input>
      </Form-item>
      <Form-item label="url" prop="websiteUrl">
        <Input v-model="formValidate.websiteUrl" placeholder="请输入..."></Input>
      </Form-item>
      <Form-item label="分类" prop="type">
        <RadioGroup v-model="formValidate.isHttps">
          <Radio :label="1">https</Radio>
          <Radio :label="0">http</Radio>
        </RadioGroup>
      </Form-item>
      <Form-item label="描述" prop="websiteDesc">
        <Input v-model="formValidate.websiteDesc" type="textarea" :autosize="{minRows: 5,maxRows: 5}" placeholder="请输入..."></Input>
      </Form-item>
    </Form>
  </Modal>
</template>
<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '编辑',
    },
  },
  data() {
    return {
      // 显示、隐藏弹框
      modal: this.value,
      // 确认按钮点击提交是否出现loading
      loading: true,
      // 表单数据
      formValidate: {
        isHttps: 1,
      },
      ruleValidate: {
        websiteName: [
          { required: true, message: '标题不能为空', trigger: 'blur' },
        ],
        websiteUrl: [
          { required: true, message: 'url不能为空', trigger: 'blur' },
        ],
        websiteDesc: [
          { required: true, message: '请输入详情', trigger: 'blur' },
          { type: 'string', min: 10, message: '介绍不能少于10字', trigger: 'blur' },
        ],
      },
    }
  },
  watch: {
    value(val) {
      this.modal = val
    },
    modal(val) {
      this.$emit('input', val)
    },
  },
  methods: {
    /**
     * 表单验证
     */
    asyncOK() {
      this.$refs['formValidate'].validate((valid) => {
        if (valid) {
          this.postWebsite()
        } else {
          this.loading = false
          setTimeout(() => {
            this.loading = true
          }, 10)
        }
      })
    },
    /**
     * 提交填写的数据
     */
    postWebsite() {
      console.log(this.formValidate)
      // this.$ajax.haoAdd({
      //   data: this.formValidate,
      //   type: 'add',
      // }).then((data) => {
      //   this.reset()
      // }).catch((err) => {
      //   this.$Message.error(err)
      // })
    },
    /**
     * 重置
     */
    reset() {
      this.loading = false
      this.modal = false
      this.formValidate = {}
    },
  },
}
</script>
<style>
</style>
