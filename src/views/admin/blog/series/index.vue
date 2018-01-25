<template>
  <div>
    <div class="tags">
      <Tag
      v-for="(item, index) in tags"
      :key="index"
      :name="item.uuid"
      closable
      @on-close="handleClose2">
      <span @click="activeTagHandler(index)">{{item.label}}</span></Tag>
      <Button icon="ios-plus-empty" type="dashed" size="small" @click="handleAdd">添加专题</Button>
    </div>
    <Input v-model="activeTagVal" class="text-input" type="textarea" :rows="5" placeholder="专题简介"></Input>
    <Button type="primary" size="large">提&nbsp;交</Button>
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
      activeTagVal: '',
    }
  },
  methods: {
    handleAdd() {
      if (this.count.length) {
        this.count.push(this.count[this.count.length - 1] + 1)
      } else {
        this.count.push(0)
      }
    },
    handleClose2(event, name) {
      const index = this.count.indexOf(name)
      this.count.splice(index, 1)
    },
    activeTagHandler(index) {
      this.activeTagVal = this.tags[index].desc
    },
  },
}
</script>
<style lang="stylus" scoped>
  .text-input {
    margin 16px 0
  }
</style>
