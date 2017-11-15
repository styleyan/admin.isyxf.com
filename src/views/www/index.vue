<template>
  <div class="">这是编辑{{aaa}}页面路由
    <mavon-editor :ishljs = "true" v-model="value"/>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        aaa: 'yxf',
        value: 'sdfsdfsdfs',
      }
    },
  }
</script>