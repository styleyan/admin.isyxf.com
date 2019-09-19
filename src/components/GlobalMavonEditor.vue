<template>
  <mavon-editor :ishljs="true" @save="saveHandler" @change="changeHandler" class="global-mavon-editor" v-model="value"/>
</template>
<script>
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import Vue from 'vue'

Vue.use(mavonEditor)

export default {
  name: 'global-mavon-editor',
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
.global-mavon-editor {
  height 300px
}
</style>
