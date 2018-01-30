<template>
  <Modal
    class="dialog-add-tag"
    v-model="modalStatus"
    :title="title"
    @on-ok="okHandler">
    <Input v-model="classifyName" placeholder="专题名称"></Input>
    <Input v-model="desc" type="textarea" :rows="4" placeholder="专题描述"></Input>
  </Modal>
</template>
<script>
export default {
  name: 'dialog-add-tag',
  props: {
    title: {
      type: String,
      default: '提示',
    },
    value: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      modalStatus: this.value,
      classifyName: '',
      desc: '',
    }
  },
  watch: {
    modalStatus(val) {
      this.$emit('input', val)
    },
    value(val) {
      this.modalStatus = val
      this.classifyName = ''
      this.desc = ''
    },
  },
  methods: {
    /**
     * 点击确认
     */
    okHandler() {
      const data = {
        classifyName: this.classifyName,
        desc: this.desc,
        classify: Math.random().toString(36).substr(2),
      }
      this.$emit('ok', data)
    },
  },
}
</script>
<style lang="stylus">
.dialog-add-tag {
  position: relative;
  z-index 9999;
  .ivu-input-wrapper{
    margin-bottom 12px
  }
}
</style>
