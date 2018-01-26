<template>
  <div>
    <div class="tags">
      <Tabs 
        type="card" 
        closable 
        :animated="false"
        @on-tab-remove="tabRemoveHandler"
        @on-click="tabHandler">
        <TabPane v-for="item in tags" :name="item.uuid" :key="item.uuid" :label="item.label"></TabPane>
        <Button icon="ios-plus-empty" type="dashed" size="small" slot="extra" @click="showAddDialog">添加专题</Button>
      </Tabs>
    </div>
    <Input v-model="activeLabel" placeholder="专题名称"></Input><br/>
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
        {uuid: '0', label: 'https', desc: 'tttttttttttttttttttttttt', check: true},
        {uuid: '1', label: 'nginx', desc: 'eeeeeeeeeeeeeeee'},
        {uuid: '2', label: 'webpack', desc: 'fffffffffffff'},
        {uuid: '3', label: 'nodejs', desc: 'ddddddddddd'},
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
    tabRemoveHandler(index) {
      console.log(index)
      let text = ''
      let label = ''
      this.tags.splice(index, 1)
      if (this.tags.length) {
        text = this.tags[index].desc
        label = this.tags[index].label
      }
      this.activeLabel = label
      this.activeDesc = text
    },
    tabHandler(index) {
      console.log(index)
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
