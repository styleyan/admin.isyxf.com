<template>
  <el-dialog
    title="标签管理"
    width="600px"
    class="dialog-tags"
    :visible.sync="dialogVisible"
  >
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="id"
        width="50">
      </el-table-column>
      <el-table-column
        prop="gmtCreate"
        label="日期"
        width="160">
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称"
        width="130">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="handleEdit(scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="success"
            @click="handleEdit">添加</el-button>
            <global-popover @submit="handleDelete(scope.row)"></global-popover>
        </template>
      </el-table-column>
    </el-table>

    <!-- 内层弹框 -->
    <el-dialog
      class="dialog-tags-inner"
      width="400px"
      :visible.sync="innerVisible"
      :before-close="innerHandleClose"
      append-to-body>
        <el-form :model="tagForm" :rules="rules" ref="tagRuleForm" label-width="80px">
          <el-form-item label="标签名称" prop="name">
            <el-input v-model="tagForm.name"></el-input>
          </el-form-item>
          <el-form-item class="el-form-submit-item">
            <el-button type="primary" @click="submitForm('tagRuleForm')">提交</el-button>
          </el-form-item>
        </el-form>
    </el-dialog>
  </el-dialog>
</template>
<script>
import GlobalPopover from '@/components/GlobalPopover.vue'

export default {
  name: 'global-dialog-tags',
  components: { GlobalPopover },
  data() {
    return {
      dialogVisible: false,
      innerVisible: false,
      tagForm: {
        name: '',
        id: '',
      },
      // 标签列表
      tableData: [],
      rules: {
        name: [
          { required: true, message: '请输入标签名称', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' },
        ],
      },
    }
  },
  created() {
    this.getTagsList()
  },
  methods: {
    /**
     * 显示弹框
     */
    showDialog() {
      this.dialogVisible = true
    },
    /**
     * 编辑标签
     */
    handleEdit(row) {
      if (row) {
        this.tagForm = { ...row }
      }
      this.innerVisible = true
    },
    /**
     * 提交标签
     */
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.submitTags(this.tagForm)
        } else {
          return false
        }
      })
    },
    /**
     * 添加或更新标签
     */
    submitTags(params) {
      let fn = ''
      const postParam = {}

      if (params.id) {
        fn = 'tagsUpdate'
        postParam.id = params.id
      } else {
        fn = 'tagsAdd'
      }
      postParam.name = params.name

      this.$axios[fn](postParam).then(() => {
        this.$message.success('提交成功')
        this.getTagsList()
        this.innerVisible = false
      }).catch(() => {})
    },
    /**
     * 删除标签
     */
    handleDelete(row) {
      this.$axios.tagsDelete(row.id).then(() => {
        this.$message.error('删除成功')
        this.getTagsList()
      })
    },
    /**
     * 内层弹框，关闭前清空效验
     */
    innerHandleClose(done) {
      this.$refs['tagRuleForm'].resetFields()
      done()
    },
    /**
     * 获取标签列表
     */
    getTagsList() {
      this.$axios.tagsList().then((list) => {
        this.tableData = list
        this.$emit('tagHandle', list)
      })
    },
  },
}
</script>
<style lang="stylus">
.dialog-tags{
  .dialog-footer{
    text-align center
  }
}
.dialog-tags-inner{
  .el-form-submit-item{
    text-align center
  }
  .el-form-item__content{
    margin-left 0 !important
  }
}
</style>
