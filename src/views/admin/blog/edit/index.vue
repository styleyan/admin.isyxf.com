<template>
  <div class="wrap-mavon-edit">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="文章标题" prop="title">
          <Input v-model="formValidate.title"></Input>
        </FormItem>
        <FormItem label="文章内容" prop="desc">
          <my-mavon-editor :text.sync="formValidate.desc"></my-mavon-editor>
        </FormItem>
        <FormItem label="文章分类" prop="type">
          <Select v-model="formValidate.type" style="width:260px">
            <Option v-for="item in typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </FormItem>
        <FormItem label="文章标签">
          <Select v-model="formValidate.tags" multiple style="width:260px">
            <Option v-for="item in tagList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </FormItem>
        <FormItem label="发布日期" prop="date">
          <DatePicker type="date" placement="top-start" placeholder="请选择发布日期，默认为当前日期" v-model="formValidate.date" style="width: 260px"></DatePicker>
        </FormItem>
        <FormItem label="是否显示">
          <i-switch v-model="formValidate.switch" size="large">
            <span slot="open">显示</span>
            <span slot="close">隐藏</span>
          </i-switch>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
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
      tagList: [
        {
          value: '1',
          label: '技术',
        },
        {
          value: '2',
          label: '散文',
        },
        {
          value: '3',
          label: '前端',
        },
      ],
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
        date: '',
        // 文章是否显示
        switch: true,
        // 文章内容
        desc: '',
        // 文章标签
        tags: [],
        // 文章分类
        type: '',
      },
      ruleValidate: {
        title: [
            { required: true, message: '文章标题不能为空', trigger: 'blur' },
        ],
        date: [
            { required: true, type: 'date', message: '请选择发表日期', trigger: 'change' },
        ],
        desc: [
            { required: true, message: '文章内容不能为空', trigger: 'blur' },
            { type: 'string', min: 20, message: '不能少于20个字', trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!')
        } else {
          this.$Message.error('Fail!')
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
