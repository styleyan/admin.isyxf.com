<template>
  <mavon-editor ref="md" :ishljs="true" @imgAdd="imgAddHandle" @save="saveHandler" @change="changeHandler" class="global-mavon-editor" v-model="value"/>
</template>
<script>
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import Vue from 'vue'
import axios from 'axios'

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
  mounted() {
    this.$vm = this.$refs.md
  },
  methods: {
    changeHandler(value, render) {
      this.toHtml(render)
    },
    saveHandler() {
      this.$emit('save')
    },
    /**
     * 添加图片
     */
    imgAddHandle(pos, $file) {
      console.log(pos)
      console.log($file)

      // 第一步.将图片上传到服务器.
      var formdata = new FormData()
      formdata.append('image', $file)
      axios({
        url: '/api/images/qiniuyun',
        method: 'post',
        data: formdata,
        headers: { 'Content-Type': 'multipart/form-data' },
      }).then((res) => {
        if (res.status) {
          this.$vm.$img2Url(pos, res.result)
        } else {
          this.$message.error(res.message | '上传图片出现异常')
        }
      }).catch((e) => {
        this.$message.error(e.message | '上传图片出现异常')
      })
    },
  },
}
</script>
<style lang="stylus">
.global-mavon-editor {
  height 300px
}
</style>
