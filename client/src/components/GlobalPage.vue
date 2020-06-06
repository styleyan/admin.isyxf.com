<template>
  <el-pagination
    class="global-page"
    background
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :page-size="pageSize"
    :current-page.sync="pageNum"
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
    // 额外参数
    otherParam: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      pageSize: 10,
      total: 0,
      pageNum: 1,
      searchVal: '',
      isInit: true,
    }
  },
  created() {
    const pageNum = this.$route.query.pageNum && Number.parseInt(this.$route.query.pageNum)

    if (!isNaN(pageNum)) {
      this.pageNum = pageNum
    }

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
    getList() {
      if (!this.request || !this.$axios[this.request]) {
        return
      }
      let params = { pageNum: this.pageNum, pageSize: this.pageSize }

      if (this.searchParam) {
        params.search = this.searchVal
      }

      if (Object.keys(this.otherParam)) {
        params = { ...params, ...this.otherParam }
      }

      this.$axios[this.request](params).then((data) => {
        this.$emit('receiveData', data.list)

        if (!this.isInit) {
          this.$emit('pageInfo', params)
        }
        this.isInit = false
        this.total = data.total
        this.pageNum = data.pageNum
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
