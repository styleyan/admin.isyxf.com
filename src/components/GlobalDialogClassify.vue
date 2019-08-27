<template>
    <el-dialog width="500px" title="添加专题" :visible.sync="dialogFormVisible">
        <el-form :model="rowData">
            <el-form-item label="专题名称" :label-width="formLabelWidth">
            <el-input v-model="rowData.title" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="专题内容" :label-width="formLabelWidth">
                <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="rowData.desc"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="toggleVisibleHandle()">取 消</el-button>
            <el-button type="primary" @click="toggleVisibleHandle()">确 定</el-button>
        </div>
    </el-dialog>
</template>
<script>
export default {
  name: 'global-dialog-classify',
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: '80px',
      rowData: {
        title: '',
        desc: '',
      },
    }
  },
  methods: {
    /**
         * 切换显示状态
         */
    toggleVisibleHandle(rowData) {
      if (rowData) {
        this.rowData = rowData
      } else {
        this.rowData = { title: '', desc: '' }
      }
      this.dialogFormVisible = !this.dialogFormVisible
    },
  },
}
</script>