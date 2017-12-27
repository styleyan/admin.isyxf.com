<template>
  <div class="wrap-mavon-edit">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="文章标题" prop="title">
          <Input v-model="formValidate.title"></Input>
        </FormItem>
        <FormItem label="文章内容" prop="content">
          <my-mavon-editor :text.sync="formValidate.content"></my-mavon-editor>
        </FormItem>
        <FormItem label="文章分类" prop="classify">
          <Select v-model="formValidate.classify" style="width:260px">
            <Option v-for="item in typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </FormItem>
        <FormItem label="发布日期" prop="createTime">
          <DatePicker type="date" placement="top-start" placeholder="请选择发布日期，默认为当前日期" v-model="formValidate.createTime" style="width: 260px"></DatePicker>
        </FormItem>
        <FormItem label="是否显示">
          <i-switch v-model="formValidate.isShow" size="large">
            <span slot="open">显示</span>
            <span slot="close">隐藏</span>
          </i-switch>
        </FormItem>
        <FormItem>
            <Button type="primary" :loading="loadingStatus" @click="handleSubmit('formValidate')">{{loadingText}}</Button>
            <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
        </FormItem>
    </Form>
  </div>
</template>
<script>
import myMavonEditor from './components/my-mavon-editor.vue'

export default {
  components: { myMavonEditor },
  data() {
    return {
      loadingStatus: false,
      typeList: [
        {
          value: 1,
          label: '技术',
        },
        {
          value: 2,
          label: '散文',
        },
      ],
      formValidate: {
        // 文章标题
        title: '',
        // 文章发表日期
        createTime: '',
        // 文章是否显示
        isShow: true,
        // 文章内容
        desc: '',
        // 文章分类
        classify: '',
      },
      ruleValidate: {
        title: [
            { required: true, message: '文章标题不能为空', trigger: 'blur' },
        ],
        createTime: [
            { required: true, type: 'date', message: '请选择发表日期', trigger: 'change' },
        ],
        classify: [
            { required: true, message: '请选择文章分类' },
        ],
        content: [
            { required: true, message: '文章内容不能为空', trigger: 'blur' },
            { type: 'string', min: 1, message: '不能少于20个字', trigger: 'blur' },
        ],
      },
    }
  },
  computed: {
    loadingText() {
      return this.loadingStatus ? '' : '提交'
    },
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.loadingStatus = true
          this.$ajax.blogAdd(this.formValidate).then((result) => {
            this.loadingStatus = false
          }).catch((e) => {
            this.loadingStatus = false
          })
        } else {
          this.$Message.error('文章相关信息还没填写完整!')
        }
      })
    },
    handleReset(name) {
      this.$refs[name].resetFields()
    },
  },
}
</script>
<style lang="stylus">
.wrap-mavon-edit {
  .ivu-date-picker {
    .ivu-select-dropdown {
      z-index : 2000
    }
  }
}
</style>
