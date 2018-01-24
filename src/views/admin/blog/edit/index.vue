<template>
  <div class="wrap-mavon-edit">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="文章标题" prop="title">
          <Input v-model="formValidate.title"></Input>
        </FormItem>
        <FormItem label="文章内容" prop="content">
          <my-mavon-editor :toHtml="toHtml" :text.sync="formValidate.content"></my-mavon-editor>
        </FormItem>
        <FormItem label="文章地址" prop="articleId">
          <Input v-model="formValidate.articleId" class="item-width"></Input>
        </FormItem>
        <FormItem label="专题" prop="classify">
          <Select v-model="formValidate.classify" class="item-width">
            <Option v-for="item in typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </FormItem>
        <FormItem label="发布日期" prop="createTime">
          <DatePicker 
            type="datetime" 
            format="yyyy-MM-dd HH:mm:ss" 
            placement="top-start" 
            placeholder="请选择发布日期，默认为当前日期" 
            v-model="formValidate.createTime"
            class="item-width"></DatePicker>
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
      // 文章id
      articleId: this.$route.query.articleId,
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
        createTime: new Date(),
        // 文章是否显示
        isShow: true,
        // 文章内容
        content: '',
        // 专题
        classify: '',
        // 文章访问地址
        articleId: '',
      },
      ruleValidate: {
        title: [
            { required: true, message: '文章标题不能为空', trigger: 'blur' },
        ],
        url: [
            { required: true, message: '文章地址不能为空', trigger: 'blur' },
        ],
        createTime: [
            { required: true, type: 'date', message: '请选择发表日期', trigger: 'change' },
        ],
        classify: [
            { required: true, message: '专题' },
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
  created() {
    if (this.articleId) {
      this.blogDetail(this.articleId)
    }
  },
  methods: {
    /**
     * 提交文章数据
     * @param {String} name - ref值
     */
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.loadingStatus = true
          this.blogSave(this.formValidate)
        } else {
          this.$Message.error('文章相关信息还没填写完整!')
        }
      })
    },
    /**
     * 重置
     */
    handleReset(name) {
      this.$refs[name].resetFields()
    },
    /**
     * 编辑文章，初始化文章信息
     * @param {String} articleId - 文章id
     */
    blogDetail(articleId) {
      this.$ajax.blogDetail({articleId}).then((result) => {
        this.formValidate = result.article
      }).catch(() => {
        this.$Message.error('服务器错误了')
      })
    },
    /**
     * 更新/添加文章
     * @param {Object} param - 更新信息
     */
    blogSave(param) {
      const apiFn = this.articleId ? 'blogUpdate' : 'blogAdd'
      param.preMore = `${param.render.split('<!--more-->')[0]}[...]`
      this.$ajax[apiFn](param).then((data) => {
        this.loadingStatus = false
        this.articleId = this.articleId || data.articleId
        this.$Message.success('保存成功')
      }).catch(() => {
        this.$Message.error('服务器错误了')
        this.loadingStatus = false
      })
    },
    /**
     * html标签
     */
    toHtml(html) {
      this.formValidate.render = html
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
  .item-width {
    width 260px
  }
}
</style>
