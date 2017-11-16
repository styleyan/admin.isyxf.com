<template>
  <Modal
    v-model="modal"
    :title="title"
    :loading="loading"
    @on-ok="asyncOK">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="50">
      <Form-item label="名称" prop="name">
        <Input v-model="formValidate.name" placeholder="请输入..."></Input>
      </Form-item>
      <Form-item label="url" prop="url">
        <Input v-model="formValidate.url" placeholder="请输入..."></Input>
      </Form-item>
      <Form-item label="logo" prop="logo">
        <Input v-model="formValidate.logo" placeholder="请输入..."></Input>
      </Form-item>
      <Form-item label="分类" prop="type">
        <Select v-model="formValidate.type" placeholder="选择分类">
            <Option value="1">省吃俭用</Option>
            <Option value="2">前端工具</Option>
            <Option value="3">论坛社区</Option>
        </Select>
      </Form-item>
      <Form-item label="描述" prop="desc">
        <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 5,maxRows: 5}" placeholder="请输入..."></Input>
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
    modalIndex: {
      type: Number,
      default: -1,
    },
  },
  data() {
    return {
      modal: this.value,
      loading: true,
      formValidate: {},
      ruleValidate: {
        name: [
          { required: true, message: '标题不能为空', trigger: 'blur' },
        ],
        url: [
          { required: true, message: 'url不能为空', trigger: 'blur' },
        ],
        logo: [
          { required: true, message: 'logo地址不能为空', trigger: 'blur' },
        ],
        type: [
          { required: true, message: '选择分类', trigger: 'change' },
        ],
        desc: [
          { required: true, message: '请输入详情', trigger: 'blur' },
          { type: 'string', min: 1, message: '介绍不能少于20字', trigger: 'blur' },
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
    modalIndex(val) {
      console.log(val)
    },
  },
  methods: {
    asyncOK() {
      this.$refs['formValidate'].validate((valid) => {
        if (valid) {
          console.log('ssss')
        } else {
          this.loading = false
          setTimeout(() => {
            this.loading = true
          }, 10)
        }
      })
    },
  },
}
</script>
<style>
</style>
