<template>
    <el-popover
        v-model="visible"
        placement="bottom"
        width="130"
        class=""
        trigger="click">
        <div class="global-popver-multiple">
            <el-checkbox-group class="" v-model="checkList">
                <el-checkbox v-for="(item, key) in list" :label="item.value" :key="key">{{item.text}}</el-checkbox>
            </el-checkbox-group>
        </div>
        <div>
            <el-button type="text" :disabled="!checkList.length" @click="buttonHandler()">筛选</el-button> <el-button type="text" @click="buttonHandler(true)">重置</el-button>
        </div>
        <el-button :class="{'global-popver-multiple-button': !checkList.length }" slot="reference" type="text" :icon="icon"></el-button>
    </el-popover>
</template>
<script>
export default {
  name: 'GlobalPopverMultiple',
  props: {
    icon: {
      type: String,
      default: 'iconfont icon-filter',
    },
    list: {
      type: Array,
      default: () => ([]),
    },
  },
  data() {
    return {
      checkList: [],
      visible: false,
    }
  },
  methods: {
    /**
         * 清空
         */
    clearCheck() {
      this.checkList = []
    },
    /**
         * 重置
         */
    buttonHandler(type = false) {
      if (type) {
        this.clearCheck()
      }
      this.$emit('checkout', this.checkList)
      this.visible = false
    },
  },
}
</script>
<style lang="stylus">
.global-popver-multiple{
    max-height 280px
    overflow-y scroll
    border-bottom 1px solid #e8e8e8
    .el-checkbox{
        margin-bottom 6px
    }
}
.global-popver-multiple-button{
    color: #777
}
</style>