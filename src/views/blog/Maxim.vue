<template>
  <global-layout>
    <global-container-top @searchHandle="searchHandle" @addHandle="showDialog"></global-container-top>
    <el-table class="classify-list" :data="tableData">
      <el-table-column prop="gmtCreate" width="180" label="添加时间"></el-table-column>
      <el-table-column prop="context" label="内容"></el-table-column>
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
            @click="showDialog(scope.row)">编辑</el-button>
          <global-popover @submit="handleDelete(scope.row)"></global-popover>
        </template>
      </el-table-column>
    </el-table>
    <global-page ref="globalPage" @receiveData="receiveDataHandle" request="maximSearchList" :searchParam="true"></global-page>
    <global-dialog-classify @submit="dialogSubmitHandle" :itemList="itemList" title="箴言" ref="globalDialogClassify"></global-dialog-classify>
  </global-layout>
</template>
<script>
import GlobalLayout from '@/components/GlobalLayout.vue'
import GlobalContainerTop from '@/components/GlobalContainerTop.vue'
import GlobalDialogClassify from '@/components/GlobalDialogClassify.vue'
import GlobalPopover from '@/components/GlobalPopover.vue'
import GlobalPage from '@/components/GlobalPage.vue'

export default {
  name: 'maximPage',
  components: { GlobalLayout, GlobalContainerTop, GlobalDialogClassify, GlobalPopover, GlobalPage },
  data() {
    return {
      tableData: [],
      currentPage3: 1,
      itemList: [
        { type: 'textarea', label: '内容', placeholder: '', key: 'context', rows: 10 },
        { type: 'switch', label: '状态', placeholder: '', key: 'state' },
      ],
    }
  },
  methods: {
    /**
     * 接收列表数据
     */
    receiveDataHandle(list) {
      this.tableData = list
    },

    /**
     * 状态更新
     */
    switchChangeHandle(state, row) {
      this.$axios.maximUpdate({
        id: row.id,
        state,
      }).catch(() => {
        row.state = state === 0 ? 1 : 0
      })
    },

    /**
     * 编辑
     */
    handleEdit(row) {
      this.showDialog(row)
    },

    /**
     * 删除
     */
    handleDelete(row) {
      this.$axios.maximDelete(row.id).then(() => {
        this.$refs.globalPage.getList()
      })
    },

    /**
     * 提交
     */
    dialogSubmitHandle(data, type) {
      let _type = 'maximAdd'

      if (type === 'update') {
        _type = 'maximUpdate'
      }

      this.$axios[_type](data).then(() => {
        this.$message.success('操作成功')
        this.$refs.globalPage.getList()
      })
    },

    /**
     * 搜索
     */
    searchHandle(searchVal) {
      this.$refs.globalPage.searchList(searchVal)
    },

    /**
     * 显示弹框
     */
    showDialog(rowData) {
      this.$refs.globalDialogClassify.toggleVisibleHandle(rowData)
    },
  },
}
</script>
