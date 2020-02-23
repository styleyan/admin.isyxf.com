<template>
  <global-layout>
    <global-container-top @searchHandle="searchHandle" @addHandle="showDialog" placeholder="请输入影视名"></global-container-top>
    <el-table class="books-list" :data="tableData">
      <el-table-column prop="gmtCreate" label="添加时间" width="180"></el-table-column>
      <el-table-column prop="movieName" label="名称"></el-table-column>
      <el-table-column prop="type" label="类型" :formatter="formatterHandle"></el-table-column>
      <el-table-column prop="movieScore" label="评分"></el-table-column>
      <el-table-column label="评价">
        <template slot-scope="scope">
          <el-popover
            placement="top"
            trigger="hover"
            :content="scope.row.movieEvaluate">
            <el-button type="text" slot="reference">查看</el-button>
          </el-popover>
        </template>
      </el-table-column>
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
    <global-page ref="globalPage" @receiveData="receiveDataHandle" request="moviesList" :searchParam="true"></global-page>
    <global-dialog-classify @submit="dialogSubmitHandle" :itemList="itemList" title="添加影视" ref="globalDialogClassify"></global-dialog-classify>
  </global-layout>
</template>

<script>
import GlobalLayout from '@/components/GlobalLayout.vue'
import GlobalContainerTop from '@/components/GlobalContainerTop.vue'
import GlobalDialogClassify from '@/components/GlobalDialogClassify.vue'
import GlobalPopover from '@/components/GlobalPopover.vue'
import GlobalPage from '@/components/GlobalPage.vue'

export default {
  name: 'moviesPage',
  components: { GlobalLayout, GlobalContainerTop, GlobalDialogClassify, GlobalPopover, GlobalPage },
  data() {
    return {
      tableData: [],
      itemList: [
        { type: 'input', label: '影视名', placeholder: '', key: 'movieName' },
        { type: 'radio', label: '类型', key: 'type', radios: [{ label: '动漫', key: 1 }, { label: '纪录片', key: 2 }, { label: '电影', key: 3 }, { label: '连续剧', key: 4 }] },
        { type: 'input', label: '评分', placeholder: '', key: 'movieScore' },
        { type: 'textarea', label: '评价', placeholder: '', key: 'movieEvaluate' },
        { type: 'switch', label: '状态', placeholder: '', key: 'state' },
      ],
      mapType: {
        '1': '动漫',
        '2': '纪录片',
        '3': '电影',
        '4': '连续剧',
      },
    }
  },
  methods: {
    /**
     * 格式化类型
     * 1:动漫, 2:纪录片, 3:电影, 4:连续剧
     */
    formatterHandle(row) {
      return this.mapType[row.type]
    },
    /**
     * 状态更新
     */
    switchChangeHandle(state, row) {
      this.$axios.moviesUpdate({
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
      this.$axios.moviesDelete(row.id).then((data) => {
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
      let submitType = 'moviesAdd'

      if (type === 'update') {
        submitType = 'moviesUpdate'
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
