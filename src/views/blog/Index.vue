<template>
  <global-layout>
    <global-container-top></global-container-top>
    <el-table class="article-list" :data="tableData">
      <el-table-column label="标题">
        <template slot-scope="scope">
          <i class="iconfont icon-redo"></i>
          <router-link :to="scope.row.url">{{scope.row.title}}</router-link>
        </template>
      </el-table-column>
      <el-table-column prop="tags" :filters="null" label="标签" width="150">
        <el-tag
          type="success"
          close-transition>标签</el-tag>
      </el-table-column>
      <el-table-column prop="classifyId" label="分类" width="170"></el-table-column>
      <el-table-column prop="gmtCreate" label="发布时间" width="200"></el-table-column>
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
  name: 'aaaa',
  components: { GlobalLayout, GlobalContainerTop },
  data() {
    return {
      tableData: [],
      currentPage3: 1,
    }
  },
  mounted() {
    this.$axios.indexList({ pageNum: 1, pageSize: 7 }).then((data) => {
      data.list.forEach(item => {
        item.state = !!item.state
      })

      this.tableData = data.list
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
.article-list{
  a{
    color #606266
    text-decoration none

    &:hover{
      text-decoration underline
    }
  }
  .icon-redo{
    font-size 12px
    margin-right 4px
  }
}
</style>
