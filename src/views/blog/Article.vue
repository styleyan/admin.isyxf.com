<template>
    <global-layout>
        <el-form :model="formValidate" :rules="rules" ref="ruleForm" label-width="100px" class="article-form">
          <el-form-item label="文章标题" prop="title">
            <el-input v-model="formValidate.title"></el-input>
          </el-form-item>
          <el-form-item label="文章内容" prop="content">
            <global-mavon-editor @save="saveArticleHandle" :toHtml="toHtml" :text.sync="formValidate.content"></global-mavon-editor>
          </el-form-item>
          <el-form-item label="文章地址" prop="url">
            <el-input class="article-input-width" v-model="formValidate.url"></el-input>
          </el-form-item>
          <el-form-item label="文章专题" prop="classifyId">
            <el-select class="article-input-width" v-model="formValidate.classifyId" filterable placeholder="请选择">
              <el-option
                v-for="item in classifyList"
                :key="item.id"
                :label="item.title"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="文章标签" prop="tags">
            <el-checkbox-group v-model="formValidate.tags">
              <el-checkbox v-for="(tag,index) in tags" :key="index" :label="tag.id + ''" value="4">{{tag.name}}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="是否显示">
            <el-switch
              v-model="formValidate.state"
              :active-value="1"
              :inactive-value="0">
            </el-switch>
          </el-form-item>
          <el-form-item label="">
              <el-button type="primary" @click="saveArticleHandle">保存</el-button>
          </el-form-item>
        </el-form>
    </global-layout>
</template>
<script>
import GlobalLayout from '@/components/GlobalLayout.vue'
import GlobalMavonEditor from '@/components/GlobalMavonEditor.vue'

export default {
  name: 'articleNew',
  components: { GlobalLayout, GlobalMavonEditor },
  data() {
    return {
      // 文章类型 (添加、修改)
      articleType: 'add',
      // 分类列表
      classifyList: [],
      // 标签列表
      tags: [],
      // 表单字段
      formValidate: {
        // 文章标题
        title: '',
        // 文章内容
        content: '',
        // 专题
        classify: '',
        // 文章访问地址
        articleId: '',
        // 是否显示
        state: 0,
        // 标签列表
        tags: [],
        // 文章简介
        brief: '',
        // 文章id
        id: '',
      },
      // 校验规则
      rules: {
        title: [
          { required: true, message: '请输入文章标题', trigger: 'blur' },
          { min: 3, max: 30, message: '长度在 3 到 30 个字符', trigger: 'blur' },
        ],
        content: [
          { required: true, message: '请输入文章内容', trigger: 'blur' },
          { min: 1, max: 4000, message: '文章不能为空', trigger: 'blur' },
        ],
        url: [
          { required: true, message: '请输入文章地址', trigger: 'blur' },
          { min: 3, max: 40, message: '长度在 3 到 40 个字符', trigger: 'blur' },
        ],
        classifyId: [
          { required: true, message: '请选择文章专提', trigger: 'change' },
        ],
        tags: [
          { type: 'array', required: true, message: '请至少选择一个标签', trigger: 'change' },
        ],
      },
    }
  },
  created() {
    this.getTagsList()
    this.getClassifyList()

    const { params, name } = this.$route
    if (params.id && name === 'blogArticleEdit') {
      this.articleType = 'edit'
      this.getArticleInfo(params.id)
    }
  },
  methods: {
    /**
     * 获取文章信息
     */
    getArticleInfo(id) {
      this.$axios.articleDetail({ id }).then((info) => {
        if (info) {
          info.tags = info.tags.split(',')
          this.formValidate = info
        } else {
          console.log('文章不存在')
        }
      })
    },

    /**
     * 获取标签列表
     */
    getTagsList() {
      this.$axios.tagsList().then((list) => {
        this.tags = list
      })
    },

    /**
     * 获取专辑列表
     */
    getClassifyList() {
      this.$axios.classifyList().then((list) => {
        this.classifyList = list
      })
    },

    /**
     * html标签
     */
    toHtml(html) {
      this.formValidate.brief = html
    },

    /**
     * 保存/更新 文章
     */
    saveArticleHandle() {
      this.$refs['ruleForm'].validate((valid) => {
        let successMessage = ''

        if (!valid) {
          return false
        }

        let fn
        if (this.articleType === 'add') {
          fn = 'articleAdd'
          successMessage = '添加文章成功'
        } else {
          fn = 'articleEdit'
          successMessage = '更新文章成功'
        }

        const params = { ...this.formValidate }
        params.tags = params.tags.join(',')

        this.$axios[fn](params).catch((e) => {
          this.$message.error(e.message)
        }).then((data) => {
          if (data && this.articleType === 'add') {
            this.formValidate.id = data
            this.articleType = 'edit'
          }
          this.$message.success(successMessage)
        })
      })
    },
  },
}
</script>
<style lang="stylus">
.article-form{
  margin-top 10px
  .article-input-width{
    width 320px
  }

  .el-form-item{
    .el-form-item__content{
      text-align left
    }
  }

  .el-checkbox{
    margin-right: 16px
  }

  .el-checkbox__label{
    padding-left 4px
  }
}
</style>
