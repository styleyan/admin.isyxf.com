<template>
  <el-pagination
    class="global-page"
    background
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :page-size="pageSize"
    layout="prev, pager, next, jumper"
    :total="total">
  </el-pagination>
</template>
<script>
export default {
  name: 'global-page',
  props: {
    // 请求名称
    request: {
      type: String,
      default: '',
    },
    // 是否支持搜索
    searchParam: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      pageSize: 10,
      total: 0,
      pageNum: 1,
      searchVal: '',
    }
  },
  created() {
    this.getList()
  },
  methods: {
    /**
     * 当前页
     */
    handleCurrentChange(num) {
      this.pageNum = num
      this.getList()
    },

    /**
     * 每页条数数量
     */
    handleSizeChange(size) {
      this.pageSize = size
      this.getList()
    },

    /**
     * 搜索
     */
    searchList(searchVal) {
      this.pageNum = 1
      this.searchVal = searchVal
      this.getList()
    },

    /**
     * 获取列表
     * @param searchVal 搜索内容
     */
    getList(param) {
      if (!this.request || !this.$axios[this.request]) {
        return
      }
      let params = { pageNum: this.pageNum, pageSize: this.pageSize }

      if (this.searchParam) {
        params.search = this.searchVal
      }
      this.$axios[this.request](params).then((data) => {
        this.$emit('receiveData', data.list)
        this.total = data.total
      })
    },
  },
}
</script>
<style lang="stylus">
.global-page{
  text-align: right
  margin-top: 30px
}
</style>
