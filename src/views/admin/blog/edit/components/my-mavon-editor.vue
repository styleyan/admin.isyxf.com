<template>
  <mavon-editor :ishljs="true" @save="saveHandler" @change="changeHandler" class="mavon-editor-markdown" v-model="value"/>
</template>
<script>
  export default {
    props: {
      text: {
        type: String,
        default: '',
      },
      toHtml: {
        type: Function,
        default: () => {},
      },
    },
    data() {
      return {
        value: this.text,
      }
    },
    watch: {
      value(val) {
        this.$emit('update:text', val)
      },
      text(val) {
        this.value = val
      },
    },
    methods: {
      changeHandler(value, render) {
        this.toHtml(render)
      },
      saveHandler() {
        this.$emit('save')
      },
    },
  }
</script>
<style lang="stylus">
.mavon-editor-markdown {
  height 300px
}
</style>
