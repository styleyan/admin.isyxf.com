<template>
  <global-layout>
    <global-container-top @addHandle="addHandle"></global-container-top>
    <el-table class="classify-list" :data="tableData">
      <el-table-column prop="gmtCreate" width="180" label="添加时间"></el-table-column>
      <el-table-column prop="context" label="内容"></el-table-column>
      <el-table-column width="160" label="状态">
        <template slot-scope="scope">
          <el-switch
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
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="global-page"
      background
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="10"
      layout="prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
    <global-dialog-classify :itemList="itemList" title="箴言" ref="globalDialogClassify"></global-dialog-classify>
  </global-layout>
</template>
<script>
import GlobalLayout from '@/components/GlobalLayout.vue'
import GlobalContainerTop from '@/components/GlobalContainerTop.vue'
import GlobalDialogClassify from '@/components/GlobalDialogClassify.vue'

export default {
  name: 'maximPage',
  components: { GlobalLayout, GlobalContainerTop, GlobalDialogClassify },
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
  mounted() {
    this.$axios.maximList().then((data) => {
      console.log(data)
      this.tableData = data
    })
  },
  methods: {
    handleCurrentChange(index) {
      console.log(index)
    },
    /**
     * 编辑
     */
    handleEdit(index, row) {
      console.log(index, row)
      this.addHandle(row)
    },
    /**
     * 添加专题
     */
    addHandle(rowData) {
      this.$refs.globalDialogClassify.toggleVisibleHandle(rowData)
    },
  },
}
</script>
