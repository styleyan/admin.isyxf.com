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
    request: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      pageSize: 10,
      total: 0,
      pageNum: 1,
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
     * 获取列表
     */
    getList() {
      if (!this.request || !this.$axios[this.request]) {
        return
      }

      this.$axios[this.request]({ pageNum: this.pageNum, pageSize: this.pageSize }).then((data) => {
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