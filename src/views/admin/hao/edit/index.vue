<template>
  <div>
    <modal-edit
      v-model="modalStatus"
      :modal-index="0">
    </modal-edit>
    <top-bar @modalHandle="modalHandle"></top-bar>
    <table-list></table-list>
    <div class="wrap-page">
      <Page :total="100" show-sizer></Page>
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
    }
  },
  methods: {
    modalHandle() {
      this.modalStatus = true
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

