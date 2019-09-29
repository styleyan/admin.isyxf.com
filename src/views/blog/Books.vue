<template>
  <global-layout>
    <global-container-top @searchHandle="searchHandle" @addHandle="showDialog"></global-container-top>
    <el-table class="books-list" :data="tableData">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="进度:">
              <span>{{props.row.progress}}</span>
            </el-form-item>
            <el-form-item label="评分:">
              <span>{{props.row.bookScore}}</span>
            </el-form-item>
            <el-form-item label="推荐理由:">
              <span>{{props.row.bookReason}}</span>
            </el-form-item>
            <el-form-item label="评价:">
              <span>{{props.row.bookEvaluate}}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column prop="gmtCreate" label="添加时间" width="180"></el-table-column>
      <el-table-column prop="bookName" label="书名"></el-table-column>
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
            @click="handleEdit(scope.row)">编辑</el-button>
          <global-popover @submit="handleDelete(scope.row)"></global-popover>
        </template>
      </el-table-column>
    </el-table>
    <global-page ref="globalPage" @receiveData="receiveDataHandle" request="booksSearchList" :searchParam="true"></global-page>
    <global-dialog-classify @submit="dialogSubmitHandle" :itemList="itemList" title="添加书单" ref="globalDialogClassify"></global-dialog-classify>
  </global-layout>
</template>

<script>
import GlobalLayout from '@/components/GlobalLayout.vue'
import GlobalContainerTop from '@/components/GlobalContainerTop.vue'
import GlobalDialogClassify from '@/components/GlobalDialogClassify.vue'
import GlobalPopover from '@/components/GlobalPopover.vue'
import GlobalPage from '@/components/GlobalPage.vue'

export default {
  name: 'booksPage',
  components: { GlobalLayout, GlobalContainerTop, GlobalDialogClassify, GlobalPopover, GlobalPage },
  data() {
    return {
      tableData: [],
      currentPage3: 1,
      itemList: [
        { type: 'input', label: '书名', placeholder: '', key: 'bookName' },
        { type: 'radio', label: '进度', key: 'progress', radios: [{ label: '未读', key: 0 }, { label: '正在读', key: 1 }, { label: '已读', key: 2 }] },
        { type: 'input', label: '评分', placeholder: '', key: 'bookScore' },
        { type: 'textarea', label: '推荐理由', placeholder: '', key: 'bookReason' },
        { type: 'textarea', label: '评价', placeholder: '', key: 'bookEvaluate' },
        { type: 'switch', label: '状态', placeholder: '', key: 'state' },
      ],
    }
  },
  methods: {
    /**
     * 状态更新
     */
    switchChangeHandle(state, row) {
      this.$axios.booksUpdate({
        id: row.id,
        state,
      }).catch(() => {
        row.state = state === 0 ? 1 : 0
      })
    },

    /**
     * 获取列表
     */
    receiveDataHandle(list) {
      this.tableData = list
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
      this.$axios.booksDelete(row.id).then((data) => {
        this.$refs.globalPage.getList()
      })
    },

    /**
     * 显示弹框
     */
    showDialog(rowData) {
      this.$refs.globalDialogClassify.toggleVisibleHandle(rowData)
    },

    /**
     * 提交
     */
    dialogSubmitHandle(data, type) {
      let submitType = 'booksAdd'

      if (type === 'update') {
        submitType = 'booksUpdate'
      }

      this.$axios[submitType](data).then(() => {
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
  },
}
</script>
<style lang="stylus">
.books-list{
  .el-form-item{
    display block !important
    margin-bottom 0 !important
  }
  .demo-table-expand {
    label {
      padding-right 20px
      width 80px
      color #99a9bf
      text-align right
    }
  }
}
</style>
