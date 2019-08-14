<template>
  <global-layout>
    <global-container-top></global-container-top>
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
  </global-layout>
</template>
<script>
import GlobalLayout from '@/components/GlobalLayout.vue'
import GlobalContainerTop from '@/components/GlobalContainerTop.vue'

export default {
  name: 'maximPage',
  components: { GlobalLayout, GlobalContainerTop },
  data() {
    return {
      tableData: [],
      currentPage3: 1,
    }
  },
  mounted() {
    this.$axios.maximList().then((data) => {
      this.tableData = data
    })
  },
  methods: {
    handleCurrentChange(index) {
      console.log(index)
    },
  },
}
</script>
