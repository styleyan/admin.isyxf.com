<template>
    <el-popover
        v-model="visible"
        placement="bottom"
        width="60"
        class=""
        trigger="click">
        <div class="global-popver-single">
            <el-radio-group v-model="radio">
                <el-radio :label="-1">全部</el-radio>
                <el-radio :label="1">已显示</el-radio>
                <el-radio :label="0">未显示</el-radio>
            </el-radio-group>
        </div>
        <el-button :class="{'global-popver-multiple-button': radio < 0 }" slot="reference" type="text" :icon="icon"></el-button>
    </el-popover>
</template>
<script>
export default {
  name: 'GlobalPopverSingle',
  props: {
    icon: {
      type: String,
      default: 'el-icon-arrow-down',
    },
    list: {
      type: Array,
      default: () => ([]),
    },
  },
  data() {
    return {
      radio: -2,
      visible: false,
    }
  },
  watch: {
    radio(val, old) {
      this.buttonHandler()
    },
  },
  methods: {
    /**
         * 清空
         */
    clearCheck() {
      this.radio = -2
    },
    /**
         * 重置
         */
    buttonHandler() {
      this.$emit('select', this.radio)
      this.visible = false
    },
  },
}
</script>
<style lang="stylus">
.global-popver-multiple-button{
    color: #777
}
.global-popver-single{
    .el-radio{
        margin-bottom: 10px
    }
}
</style>