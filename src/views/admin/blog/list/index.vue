<template>
  <div class="article-list">
    <Row>
        <Col span="12"><Button type="error" icon="trash-a">删除选中</Button></Col>
        <Col span="12" style="text-align: right;">
          <Input class="article-search" on-enter="searchHandle" v-model="value" placeholder="请输入标题"></Input>
          <Button type="primary" @click="searchHandle">查询</Button>
        </Col>
    </Row>
    <article-table class="article-table"></article-table>
    <div class="article-page">
      <Page :total="50" show-elevator show-sizer></Page>
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
      value: '',
    }
  },
  methods: {
    /**
     * 执行搜索
     */
    searchHandle() {
      this.$ajax.login().then((data) => {
        console.log(data)
      }).catch((err) => {
        console.log(err)
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
