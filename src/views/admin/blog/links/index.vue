<template>
  <div class="">
    <Row class="links-ivu-row">
      <Col span="18"><Button type="error">删除</Button></Col>
      <Col span="6">
        <Input v-model="searchVal" placeholder="搜索内容">
          <Button slot="append" icon="ios-search"></Button>
        </Input>
      </Col>
    </Row>
    <table-list></table-list>
  </div>
</template>
<script>
import TableList from './components/table-list.vue'

export default {
  name: '',
  components: {TableList},
  data() {
    return {
      searchVal: '',
    }
  },
}
</script>
<style lang="stylus" scoped>
.links-ivu-row {
  margin-buttom 16px
}
</style>
