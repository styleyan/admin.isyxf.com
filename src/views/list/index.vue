<template>
  <div class="article-list">
    <Row>
        <Col span="12"><Button type="error" icon="trash-a">删除选中</Button></Col>
        <Col span="12" style="text-align: right;">
          <Input class="article-search" v-model="value" placeholder="请输入标题"></Input>
          <Button type="primary">查询</Button>
        </Col>
    </Row>
    <article-table class="article-table"></article-table>
    <div class="article-page">
      <Page :total="50" show-elevator show-sizer></Page>
    </div>
  </div>
</template>
<script>
import articleTable from './components/article-table.vue'

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
}
</script>
<style lang="stylus">
.article-list{
  width: 1100px
  margin: 0 auto
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
