<template>
  <Modal
    v-model="modal"
    :title="title"
    :loading="loading"
    @on-ok="asyncOK">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="50">
      <Form-item label="名称" prop="websiteName">
        <Input v-model="formValidate.websiteName" placeholder="请输入站点名称"></Input>
      </Form-item>
      <Form-item label="url" prop="websiteUrl">
        <Input v-model="formValidate.websiteUrl" placeholder="请输入链接地址"></Input>
      </Form-item>
      <Form-item label="分类">
        <RadioGroup v-model="formValidate.classify">
          <Radio :label="1">https</Radio>
          <Radio :label="0">http</Radio>
        </RadioGroup>
      </Form-item>
      <Form-item label="描述" prop="desc">
        <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 5,maxRows: 5}" placeholder="请输入描述"></Input>
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
    editData: {
      type: Object,
      default: () => ({}),
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
        classify: 1,
      },
      ruleValidate: {
        websiteName: [
          { required: true, message: '标题不能为空', trigger: 'blur' },
        ],
        websiteUrl: [
          { required: true, message: 'url不能为空', trigger: 'blur' },
        ],
        desc: [
          { required: true, message: '请输入详情', trigger: 'blur' },
          { type: 'string', min: 0, message: '介绍不能少于10字', trigger: 'blur' },
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
    editData(data) {
      this.formValidate = Object.keys(data).length ? JSON.parse(JSON.stringify(data)) : {classify: 1}
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
      const ajaxFnName = Object.keys(this.editData).length ? 'updateLink' : 'addLink'
      const _data = {
        classify: this.formValidate.classify,
        createTime: this.formValidate.createTime,
        desc: this.formValidate.desc || '-',
        websiteName: this.formValidate.websiteName,
        websiteUrl: this.formValidate.websiteUrl,
        uuid: this.formValidate.uuid || Math.random().toString(36).substr(2),
      }
      this.$ajax[ajaxFnName](_data).then((data) => {
        this.$emit('refresh')
        this.reset()
      }).catch((err) => {
        this.$Message.error(err)
      })
    },
    /**
     * 重置
     */
    reset() {
      this.loading = false
      this.modal = false
      this.formValidate = {
        classify: 1,
      }
    },
  },
}
</script>
<style>
</style>
