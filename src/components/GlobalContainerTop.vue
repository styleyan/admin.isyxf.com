<template>
    <el-row class="global-container-top" justify="space-between">
        <el-col class="l" :span="12"><el-button @click="addHandle" type="primary">新增</el-button></el-col>
        <el-col class="r" :span="12">
          <el-input :maxlength="15" :clearable="true" placeholder="请输入内容" v-model="searchVal" class="input-with-search">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
    </el-row>
</template>
<script>
export default {
  name: 'GlobalContainerTop',
  data() {
    return {
      searchVal: '',
    }
  },
  methods: {
    addHandle() {
      this.$emit('addHandle')
    },
  },
}
</script>
<style lang="stylus">
.global-container-top{
  margin 0 0 46px 0
  .input-with-search{
    width 300px
  }
  .l{
    text-align left
  }
  .r{
    text-align right
  }
}
</style>
