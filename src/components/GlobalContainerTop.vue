<template>
    <el-row class="global-container-top" justify="space-between">
        <el-col class="l" :span="12"><el-button @click="addHandle" type="primary">新增</el-button></el-col>
        <el-col v-if="isSearch" class="r" :span="12">
          <el-input
            :maxlength="15"
            :clearable="true"
            :placeholder="placeholder"
            v-model="searchVal"
            @keyup.enter.native="searchHandle"
            class="input-with-search">
            <el-button slot="append" @click="searchHandle" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
    </el-row>
</template>
<script>
export default {
  name: 'GlobalContainerTop',
  props: {
    isSearch: {
      type: Boolean,
      default: true,
    },
    placeholder: {
      type: String,
      default: '请输入搜索内容',
    },
  },
  data() {
    return {
      searchVal: '',
    }
  },
  methods: {
    addHandle() {
      this.$emit('addHandle')
    },
    searchHandle() {
      this.$emit('searchHandle', this.searchVal)
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
