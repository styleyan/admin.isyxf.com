<template>
  <Modal
      v-model="modal1"
      title="Common Modal dialog box title"
      @on-ok="okHandler"
      @on-cancel="cancelHandler">
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
  },
  data() {
    return {
      name: 'ddd',
    }
  },
  methods: {
    /**
     * 点击确认
     */
    okHandler() {

    },
  },
}
</script>

