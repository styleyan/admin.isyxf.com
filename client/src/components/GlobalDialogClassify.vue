<template>
    <el-dialog :width="dialogWidth" :title="title" :visible.sync="dialogFormVisible">
        <el-form :model="rowData">
            <el-form-item v-for="(item, index) in itemList" :label="item.label" :class="{'switch-item': item.type ==='switch' || item.type ==='radio'}" :key="index" :label-width="formLabelWidth">
              <template v-if="item.type ==='switch'">
                  <el-switch
                    :active-value="1"
                    :inactive-value="0"
                    style="text-align: left"
                    v-model="rowData[item.key]">
                  </el-switch>
              </template>
              <template v-if="item.type ==='input' || item.type ==='textarea'">
                  <el-input :type="item.type" :rows="item.rows || 0" :placeholder="item.placeholder" v-model="rowData[item.key]"></el-input>
              </template>
              <template v-if="item.type==='radio'">
                <el-radio-group v-model="rowData[item.key]">
                  <el-radio v-for="r in item.radios" :key="r.key" :label="r.key">{{r.label}}</el-radio>
                </el-radio-group>
              </template>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="buttonHandle(false)">取 消</el-button>
            <el-button type="primary" @click="buttonHandle(true)">确 定</el-button>
        </div>
    </el-dialog>
</template>
<script>
import utils from '@/utils'

export default {
  name: 'global-dialog-classify',
  props: {
    title: {
      type: String,
      default: '',
    },
    dialogWidth: {
      type: String,
      default: '500px',
    },
    itemList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: '80px',
      rowData: this.initKeys(),
      // 0: 添加, 1: 更新
      type: 0,
    }
  },
  methods: {
    /**
     * 初始化数据
     */
    initKeys() {
      const keys = this.itemList.map(item => item.key)
      const obj = {}

      keys.forEach((key) => {
        obj[key] = ''
      })

      return obj
    },

    /**
     * 点击事件
     */
    buttonHandle(type) {
      if (type) {
        this.$emit('submit', this.rowData, this.type)
      }
      this.dialogFormVisible = !this.dialogFormVisible
    },

    /**
     * 切换显示状态
     */
    toggleVisibleHandle(rowData) {
      if (rowData) {
        this.type = 'update'
        this.rowData = utils.clone(rowData)
      } else {
        this.type = 'add'
        this.rowData = this.initKeys()
      }
      this.dialogFormVisible = !this.dialogFormVisible
    },
  },
}
</script>
<style lang="stylus">
.switch-item{
  .el-form-item__content{
    text-align left;
  }
}
</style>