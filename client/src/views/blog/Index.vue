<template>
  <global-layout>
    <global-container-top placeholder="请输入文章标题" @searchHandle="searchHandle" @addHandle="addHandle"></global-container-top>
    <el-table ref="filterTable" class="article-list" :data="tableData">
      <el-table-column label="标题">
        <template slot-scope="scope">
          <i class="iconfont icon-redo"></i>
          <a :href="`https://www.isyxf.com/articles/${scope.row.url}`" target="_blank">{{scope.row.title}}</a>
        </template>
      </el-table-column>
      <el-table-column
        label="标签"
        width="220"
      >
        <div slot="header" slot-scope="headerScope">
          <span>{{headerScope.column.label}}</span>
          <GlobalPopverMultiple class="va" :list="tagsFilter" @checkout="filterHandle($event, 'tag')"></GlobalPopverMultiple>
        </div>
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
      <el-table-column
        prop="classifyTitle"
        label="专题"
        width="170">
        <div slot="header" slot-scope="headerScope">
          <span>{{headerScope.column.label}}</span>
          <GlobalPopverMultiple class="va" :list="classifyFilter" @checkout="filterHandle($event, 'classify')"></GlobalPopverMultiple>
        </div>
      </el-table-column>
      <el-table-column prop="gmtCreate" label="发布时间" width="200"></el-table-column>
      <el-table-column
        width="160"
        label="状态">
        <div slot="header" slot-scope="headerScope">
          <span>{{headerScope.column.label}}</span>
          <GlobalPopverSingle class="va" @select="filterHandle"></GlobalPopverSingle>
        </div>
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
          <el-link :underline="false" :href="`/blog/article/${scope.row.id}/edit`" target="_blank" icon="el-icon-edit" type="primary">编辑</el-link>
          <global-popover @submit="handleDelete(scope.row)"></global-popover>
        </template>
      </el-table-column>
    </el-table>
    <global-page ref="globalPage" :otherParam="otherParam" @receiveData="receiveDataHandle" @pageInfo="pageInfoHandle" request="articleSearchList" :searchParam="true"></global-page>
  </global-layout>
</template>

<script>
import GlobalLayout from '@/components/GlobalLayout.vue'
import GlobalContainerTop from '@/components/GlobalContainerTop.vue'
import GlobalPage from '@/components/GlobalPage.vue'
import GlobalPopover from '@/components/GlobalPopover.vue'
import GlobalPopverMultiple from '@/components/GlobalPopverMultiple.vue'
import GlobalPopverSingle from '@/components/GlobalPopverSingle.vue'

export default {
  name: 'blogArticle',
  components: { GlobalLayout, GlobalContainerTop, GlobalPage, GlobalPopover, GlobalPopverMultiple, GlobalPopverSingle },
  data() {
    return {
      tableData: [],
      classifyFilter: [],
      tagsFilter: [],
      otherParam: {
        // 已选标签
        tags: '',
        // 已选专题
        classifys: '',
        // 已选状态
        state: -1,
      },
    }
  },
  created() {
    this.getCls()
    this.getTags()
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
     * 修改状态
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
     * 获取标签分类
     */
    getTags() {
      this.$axios.tagsList().then((list) => {
        const tempArr = []
        list.forEach((item) => {
          tempArr.push({
            text: item.name,
            value: item.id,
          })
        })
        this.tagsFilter = tempArr
      }).catch(error => {
        this.$message(error.message || '系统异常')
      })
    },

    /**
     * 获取专题分类
     */
    getCls() {
      this.$axios.classifyList().then((list) => {
        const tempArr = []
        list.forEach((item) => {
          tempArr.push({
            text: item.title,
            value: item.id,
          })
        })
        this.classifyFilter = tempArr
      }).catch(error => {
        this.$message(error.message || '系统异常')
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
    /**
     * 翻页信息
     */
    pageInfoHandle(params) {
      this.$router.push({
        name: 'blogArticle',
        query: { pageNum: params.pageNum },
      })
    },

    /**
     * 过滤
     */
    filterHandle(value, type) {
      if (type === 'tag') {
        this.otherParam.tags = value.join(',')
      } else if (type === 'classify') {
        this.otherParam.classifys = value.join(',')
      } else {
        this.otherParam.state = value
      }

      this.$refs.globalPage.getList()
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
  .va{
    vertical-align middle
  }
}
</style>
