<template>
  <div>
    <div class="tags">
      <Tag
      v-for="(item, index) in tags"
      :key="index"
      :name="item.uuid"
      closable
      color="red"
      checked
      @on-close="handleClose(item.uuid)">
      <span @click="activeTagHandler(index)">{{item.label}}</span></Tag>
      <Button icon="ios-plus-empty" type="dashed" size="small" @click="showAddDialog">添加专题</Button>
    </div>
    <Input v-model="activeLabel" class="text-input" placeholder="专题名称"></Input><br/>
    <Input v-model="activeDesc" class="text-input" type="textarea" :rows="5" placeholder="专题简介"></Input><br/>
    <div class="text-input">
      <Button type="primary" size="large">提&nbsp;交</Button>&nbsp;&nbsp;&nbsp;&nbsp;
      <Button size="large">重置</Button>
    </div>
    <dialog-add-tag :tags="tags" @ok="addOkHandler" v-model="showAdd"></dialog-add-tag>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tags: [
        {uuid: 1, label: 'https', desc: 'tttttttttttttttttttttttt'},
        {uuid: 2, label: 'nginx', desc: 'eeeeeeeeeeeeeeee'},
        {uuid: 3, label: 'webpack', desc: 'fffffffffffff'},
        {uuid: 4, label: 'nodejs', desc: 'ddddddddddd'},
      ],
      showAdd: false,
      activeLabel: '',
      activeDesc: '',
    }
  },
  methods: {
    showAddDialog() {
      this.showAdd = true
    },
    handleClose(uuid) {
      let index = this.tags.findIndex((obj) => obj.uuid === uuid)
      let text = ''
      let label = ''

      if (index > 0) {
        index -= 1
      }
      this.tags.splice(index, 1)
      if (this.tags.length) {
        text = this.tags[index].desc
        label = this.tags[index].label
      }
      this.activeLabel = label
      this.activeDesc = text
    },
    activeTagHandler(index) {
      this.activeDesc = this.tags[index].desc
      this.activeLabel = this.tags[index].label
    },
    addOkHandler(data) {
      this.activeLabel = data.label
      this.activeDesc = data.desc
    },
  },
}
</script>
<style lang="stylus" scoped>
  .text-input {
    margin-top 16px
  }
</style>
