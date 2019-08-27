<template>
  <global-layout>
    <global-container-top></global-container-top>
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
  name: 'booksPage',
  components: { GlobalLayout, GlobalContainerTop },
  data() {
    return {
      tableData: [],
      currentPage3: 1,
    }
  },
  mounted() {
    this.$axios.booksList().then((data) => {
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
