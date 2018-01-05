<template>
  <div class="article-list">
    <Row>
        <Col span="12"><Button type="error" icon="trash-a">删除选中</Button></Col>
        <Col span="12" style="text-align: right;">
          <Input class="article-search" on-enter="searchHandle" v-model="searchVal" placeholder="请输入标题"></Input>
          <Button type="primary" @click="searchHandle">查询</Button>
        </Col>
    </Row>
    <article-table @removeHandler="removeHandler" :datas="datas" class="article-table"></article-table>
    <div class="article-page">
      <Page :total="pageTotal" show-elevator show-sizer></Page>
    </div>
  </div>
</template>
<script>
import articleTable from '@components/article-table/index.vue'

export default {
  name: 'www',
  components: {
    articleTable,
  },
  data() {
    return {
      searchVal: '',
      datas: [],
      pageTotal: 1,
    }
  },
  created() {
    this.searchHandle()
  },
  methods: {
    /**
     * 查询文章列表
     */
    searchHandle() {
      this.$ajax.blogList({
        search: this.searchVal,
        pageActive: 1,
        classify: 1,
        pageSize: 10,
      }).then((data) => {
        this.datas = data.list
        this.pageTotal = data.pageTotal
      }).catch((err) => {
        console.log(err)
      })
    },
    /**
     * 移除数据事件
     */
    removeHandler(param, index) {
      this.$ajax.blogDelete(param.row).then(() => {
        this.searchHandle()
        this.$Message.success('删除成功')
      }).catch(() => {
        this.$Message.success('删除失败')
      })
    },
  },
}
</script>
<style lang="stylus">
.article-list{
}
.article-page {
  text-align : right
}
.article-search {
  width: 200px
  margin-right: 10px
}
.article-table {
  margin:10px 0px 20px 0
}
</style>
