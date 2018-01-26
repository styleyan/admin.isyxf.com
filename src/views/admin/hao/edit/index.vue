<template>
  <div>
    <modal-edit
      v-model="modalStatus">
    </modal-edit>
    <top-bar @modalHandle="modalHandle"></top-bar>
    <table-list :websiteList="websiteList"></table-list>
    <div class="wrap-page">
      <Page :total="pageTotal" @on-change="pageChange" show-total></Page>
    </div>
  </div>
</template>

<script>
import tableList from './components/table-list.vue'
import topBar from './components/topbar.vue'
import modalEdit from './components/modal-edit.vue'

export default {
  name: 'hao-edit',
  components: {tableList, topBar, modalEdit},
  data() {
    return {
      modalStatus: false,
      pageTotal: 1,
      websiteList: [],
    }
  },
  mounted() {
    this.getData({
      pageActive: 1,
      pageSize: 10,
    })
  },
  methods: {
    modalHandle() {
      this.modalStatus = true
    },
    pageChange(pageActive) {
      this.getData({
        pageActive,
        pageSize: 10,
      })
    },
    getData(param) {
      this.$ajax.haoList(param).then((data) => {
        this.websiteList = data.list
        this.pageTotal = data.pageTotal
      }).catch((msg) => {
        this.$Message.error(msg)
      })
    },
  },
}
</script>
<style lang="stylus" scoped>
.wrap-page{
  margin-top: 16px
  .ivu-page{
    float: right
  }
  .ivu-page-options-sizer {
    margin-right: 0
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

