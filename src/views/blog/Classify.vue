<template>
  <global-layout>
    <global-container-top></global-container-top>
    <el-table class="classify-list" :data="tableData">
      <el-table-column prop="title" label="标题" width="280"></el-table-column>
      <el-table-column prop="desc" label="内容"></el-table-column>
      <el-table-column prop="gmtCreate" width="200" label="添加时间"></el-table-column>
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
  </global-layout>
</template>

<script>
import GlobalLayout from '@/components/GlobalLayout.vue'
import GlobalContainerTop from '@/components/GlobalContainerTop.vue'

export default {
  name: 'classifyPage',
  components: { GlobalLayout, GlobalContainerTop },
  data() {
    return {
      tableData: [],
      currentPage3: 1,
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
  },
}
</script>
<style lang="stylus">
</style>
