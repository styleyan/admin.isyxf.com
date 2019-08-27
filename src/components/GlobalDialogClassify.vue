<template>
    <el-dialog :width="dialogWidth" :title="title" :visible.sync="dialogFormVisible">
        <el-form :model="rowData">
            <el-form-item v-for="(item, index) in itemList" :label="item.label" :key="index" :label-width="formLabelWidth">
              <template v-if="item.type ==='switch'">
                  <el-switch
                    v-model="rowData[item.key]">
                  </el-switch>
              </template>
              <template v-if="item.type ==='input' || item.type ==='textarea'">
                  <el-input :type="item.type" :rows="item.rows || 0" :placeholder="item.placeholder" v-model="rowData[item.key]"></el-input>
              </template>
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
  props: {
    title: {
      type: String,
      default: '',
    },
    dialogWidth: {
      type: String,
      default: '500px',
    },
    itemList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: '80px',
      rowData: {
        title: '',
        desc: '',
        state: 1,
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