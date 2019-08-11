<template>
  <global-layout>
    <global-container-top></global-container-top>
    <el-table class="classify-list" :data="tableData">
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="gmtCreate" label="添加时间"></el-table-column>
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
  name: 'tagsPage',
  components: { GlobalLayout, GlobalContainerTop },
  data() {
    return {
      tableData: [
        {
          name: 'js',
          gmtCreate: '2019-08-03 21:29:17',
        },
      ],
    }
  },
}
</script>