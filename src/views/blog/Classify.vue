<template>
  <global-layout>
    <global-container-top @addHandle="addHandle"></global-container-top>
    <el-table class="classify-list" :data="tableData">
      <el-table-column prop="title" label="标题" width="280"></el-table-column>
      <el-table-column prop="desc" label="内容"></el-table-column>
      <el-table-column prop="gmtCreate" width="200" label="添加时间"></el-table-column>
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
    <global-dialog-classify :itemList="itemList" title="添加专题" ref="globalDialogClassify"></global-dialog-classify>
  </global-layout>
</template>

<script>
import GlobalLayout from '@/components/GlobalLayout.vue'
import GlobalContainerTop from '@/components/GlobalContainerTop.vue'
import GlobalDialogClassify from '@/components/GlobalDialogClassify.vue'

export default {
  name: 'classifyPage',
  components: { GlobalLayout, GlobalContainerTop, GlobalDialogClassify },
  data() {
    return {
      tableData: [],
      currentPage3: 1,
      itemList: [
        { type: 'input', label: '专题名称', placeholder: '', key: 'title' },
        { type: 'textarea', label: '专题内容', placeholder: '', key: 'desc' },
        { type: 'switch', label: '状态', placeholder: '', key: 'state' },
      ],
    }
  },
  mounted() {
    this.$axios.classifyList().then((data) => {
      this.tableData = data
    })
  },
  methods: {
    /**
     * 编辑
     */
    handleEdit(index, row) {
      console.log(index, row)
      this.addHandle(row)
    },
    /**
     * 删除
     */
    handleDelete(index, row) {
      console.log(index, row)
    },
    /**
     * 当前页码
     */
    handleCurrentChange() {
      console.log('当前页码')
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
<style lang="stylus">
</style>
