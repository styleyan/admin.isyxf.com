<template>
  <global-layout>
    <global-container-top placeholder="请输入文章标题" @searchHandle="searchHandle" @addHandle="addHandle"></global-container-top>
    <el-table class="article-list" :data="tableData">
      <el-table-column label="标题">
        <template slot-scope="scope">
          <i class="iconfont icon-redo"></i>
          <a :href="`https://www.isyxf.com/articles/${scope.row.url}`" target="_blank">{{scope.row.title}}</a>
        </template>
      </el-table-column>
      <el-table-column :filters="null" label="标签" width="220">
        <template slot-scope="scope">
          <div class="tag-column" v-if="scope.row.tags">
            <el-tag
              type="success"
              v-for="(tag, index) in scope.row.tags.split(',')"
              :key="index" close-transition>{{tag}}</el-tag>
          </div>
          <div v-else>
              -
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="classifyTitle" label="分类" width="170"></el-table-column>
      <el-table-column prop="gmtCreate" label="发布时间" width="200"></el-table-column>
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
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <global-popover @submit="handleDelete(scope.row)"></global-popover>
        </template>
      </el-table-column>
    </el-table>
    <global-page ref="globalPage" @receiveData="receiveDataHandle" request="articleSearchList" :searchParam="true"></global-page>
  </global-layout>
</template>

<script>
import GlobalLayout from '@/components/GlobalLayout.vue'
import GlobalContainerTop from '@/components/GlobalContainerTop.vue'
import GlobalPage from '@/components/GlobalPage.vue'
import GlobalPopover from '@/components/GlobalPopover.vue'

export default {
  name: 'blogArticle',
  components: { GlobalLayout, GlobalContainerTop, GlobalPage, GlobalPopover },
  data() {
    return {
      tableData: [],
      currentPage3: 1,
    }
  },
  methods: {
    receiveDataHandle(list) {
      this.tableData = list
    },

    /**
     * 添加文章
     */
    addHandle() {
      this.$router.push({
        name: 'blogArticleNew',
      })
    },

    /**
     * 文章更新
     */
    switchChangeHandle(state, row) {
      this.$axios.articleEdit({
        id: row.id,
        state,
      }).catch(() => {
        row.state = state === 0 ? 1 : 0
      })
    },

    /**
     * 编辑
     */
    handleEdit(index, row) {
      this.$router.push({
        name: 'blogArticleEdit',
        params: { id: row.id },
      })
    },

    /**
     * 删除
     */
    handleDelete(row) {
      this.$axios.articleDelete(row.id).then(() => {
        this.$message.success('删除成功')
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
  .tag-column{
    .el-tag{
      margin-right 8px
    }
  }
}
</style>
