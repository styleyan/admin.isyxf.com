<template>
  <div class="global-popover">
    <el-popover
      ref="popover"
      placement="top"
      width="150"
      v-model="visible">
      <p>确定删除么？删除后将无法</p>
      <div class="global-popover-button">
        <el-button size="mini" type="text" @click="visible = false">取消</el-button>
        <el-button type="primary" size="mini" @click="sureHandle()">确定</el-button>
      </div>
    </el-popover>
    <el-button v-popover:popover size="mini" type="danger">删除</el-button>
  </div>
</template>
<script>
export default {
  name: 'global-popover',
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    /**
     * 确定事件
     */
    sureHandle() {
      this.visible = false
      this.$emit('submit')
    },
  },
}
</script>
<style lang="stylus">
.global-popover{
  display inline-block
  margin-left 10px

  &-button{
    text-align: right
    margin: 0
  }
}
</style>