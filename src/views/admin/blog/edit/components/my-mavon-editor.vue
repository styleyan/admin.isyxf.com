<template>
  <mavon-editor :ishljs = "true" v-model="value"/>
</template>
<script>
  export default {
    props: {
      text: {
        type: String,
        default: '',
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
    },
  }
</script>