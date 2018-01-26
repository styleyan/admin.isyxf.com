<template>
  <div class="links-wrap">
    <modal-edit
      v-model="modalStatus">
    </modal-edit>
    <Row class="links-ivu-row">
      <Col span="18"><Button icon="trash-a" type="error">删除</Button></Col>
      <Col span="6" style="text-align: right">
        <Input v-model="searchVal" style="width: 260px;display: inline-table;" placeholder="搜索内容">
          <Button slot="append" icon="ios-search"></Button>
        </Input>
        <Tooltip content="添加友链" placement="left">
          <span @click="showModalHandle"><Icon type="compose"></Icon></span>
        </Tooltip>
      </Col>
    </Row>
    <table-list></table-list>
    <div class="wrap-page">
      <Page :total="pageTotal" @on-change="pageChange" show-total></Page>
    </div>
  </div>
</template>
<script>
import TableList from './components/table-list.vue'
import modalEdit from './components/modal-edit.vue'

export default {
  name: '',
  components: {TableList, modalEdit},
  data() {
    return {
      searchVal: '',
      pageTotal: 0,
      modalStatus: false,
    }
  },
  methods: {
    pageChange() {
      console.log('dddd')
    },
    showModalHandle() {
      this.modalStatus = true
    },
  },
}
</script>
<style lang="stylus" scoped>
.links-wrap {
  .links-ivu-row {
    margin-bottom 13px
  }
  .ivu-tooltip {
    margin-left 13px
    cursor: pointer
    font-size: 22px
    vertical-align: bottom
  }
}
</style>
<style lang="stylus">
.wrap-page{
  .ivu-page-options-sizer {
    margin-right: 0
  }
}
</style>
