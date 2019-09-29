<template>
  <global-layout>
    <global-container-top :isSearch="false" @addHandle="addHandle"></global-container-top>
    <el-table class="classify-list" :data="tableData">
      <el-table-column prop="title" label="标题" width="280"></el-table-column>
      <el-table-column prop="desc" label="内容"></el-table-column>
      <el-table-column prop="gmtCreate" width="200" label="添加时间"></el-table-column>
      <el-table-column width="160" label="状态">
        <template slot-scope="scope">
          <el-switch
            :active-value="1"
            :inactive-value="0"
            @change="switchChangeHandle($event, scope.row)"
            v-model="scope.row.state">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <global-popover @submit="handleDelete(scope.row)"></global-popover>
        </template>
      </el-table-column>
    </el-table>
    <global-dialog-classify @submit="dialogSubmitHandle" :itemList="itemList" title="添加专题" ref="globalDialogClassify"></global-dialog-classify>
  </global-layout>
</template>

<script>
import GlobalLayout from '@/components/GlobalLayout.vue'
import GlobalContainerTop from '@/components/GlobalContainerTop.vue'
import GlobalDialogClassify from '@/components/GlobalDialogClassify.vue'
import GlobalPopover from '@/components/GlobalPopover.vue'

export default {
  name: 'classifyPage',
  components: { GlobalLayout, GlobalContainerTop, GlobalDialogClassify, GlobalPopover },
  data() {
    return {
      tableData: [],
      itemList: [
        { type: 'input', label: '专题名称', placeholder: '', key: 'title' },
        { type: 'textarea', label: '专题内容', placeholder: '', key: 'desc' },
        { type: 'switch', label: '状态', placeholder: '', key: 'state' },
      ],
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    /**
     * 状态更新
     */
    switchChangeHandle(state, row) {
      this.$axios.classifyUpdate({
        id: row.id,
        state,
      }).catch(() => {
        row.state = state === 0 ? 1 : 0
      })
    },

    /**
     * 初始化列表
     */
    getList() {
      this.$axios.classifyList().then((data) => {
        this.tableData = data
      })
    },

    /**
     * 编辑
     */
    handleEdit(index, row) {
      this.addHandle(row)
    },

    /**
     * 添加专题
     */
    addHandle(rowData) {
      this.$refs.globalDialogClassify.toggleVisibleHandle(rowData)
    },
    /**
     * 删除专题
     */
    handleDelete(row) {
      this.$axios.classifyDelete(row.id).then(() => {
        this.getList()
      })
    },

    /**
     * 提交
     */
    dialogSubmitHandle(data, type) {
      let submitType = 'classifyAdd'

      if (type === 'update') {
        submitType = 'classifyUpdate'
      }

      this.$axios[submitType](data).then(() => {
        this.$message.success('操作成功')
        this.getList()
      })
    },
  },
}
</script>
<style lang="stylus">
</style>
