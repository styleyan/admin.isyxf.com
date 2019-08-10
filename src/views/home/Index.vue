<template>
  <global-layout>
    <global-container-top></global-container-top>
    <el-table :data="tableData">
      <el-table-column prop="title" label="标题" width="280"></el-table-column>
      <el-table-column prop="tags" :filters="null" label="标签" width="120">
        <el-tag
          type="success"
          close-transition>标签</el-tag>
      </el-table-column>
      <el-table-column prop="classifyId" label="分类"></el-table-column>
      <el-table-column prop="gmtCreate" label="发布时间"></el-table-column>
      <el-table-column prop="gmtModify" label="更新时间"></el-table-column>
      <el-table-column label="发布状态">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.state">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="url" label="预览"></el-table-column>
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
  },
}
</script>
<style lang="stylus">

</style>
