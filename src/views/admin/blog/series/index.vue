<template>
  <div>
    <div class="tags">
      <Tabs 
        type="card" 
        closable 
        :animated="false"
        :value="tabValue"
        @on-tab-remove="tabRemoveHandler"
        @on-click="tabHandler">
        <TabPane v-for="item in series" :name="item.classify" :key="item.classify" :label="item.classifyName"></TabPane>
        <Button icon="ios-plus-empty" type="dashed" size="small" slot="extra" @click="showAddDialog">添加专题</Button>
      </Tabs>
    </div>
    <Input v-model="activeLabel" placeholder="专题名称"></Input><br/>
    <Input v-model="activeDesc" class="text-input" type="textarea" :rows="5" placeholder="专题简介"></Input><br/>
    <div class="text-input">
      <Button type="primary" @click="sendHandler" size="large">提&nbsp;交</Button>&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
    <dialog-add-tag :tags="series" @ok="addOkHandler" v-model="showAdd"></dialog-add-tag>
  </div>
</template>
<script>
export default {
  data() {
    return {
      series: [],
      showAdd: false,
      activeLabel: '',
      activeDesc: '',
      tabValue: '',
    }
  },
  created() {
    this.$ajax.getSeries().then((data) => {
      this.series = data.list
      if (this.series.length) {
        const first = this.series[0]
        this.tabValue = first.classify
        this.activeDesc = first.desc
        this.activeLabel = first.classifyName
      }
    })
  },
  methods: {
    /**
     * 显示增加专题分类弹框
     */
    showAddDialog() {
      this.showAdd = true
    },
    /**
     * 移除专题分类
     */
    tabRemoveHandler(classify) {
      let prevClassify = {}
      let index = this.series.findIndex((o) => o.classify === classify)
      this.series.splice(index, 1)
      console.log(index)
      if (this.series.length) {
        index && --index
        prevClassify = this.series[index]
      }
      this.tabValue = prevClassify.classify || ''
      this.activeLabel = prevClassify.classifyName || ''
      this.activeDesc = prevClassify.desc || ''
    },
    /**
     * tab切换专题分类
     */
    tabHandler(classify) {
      const activeSeries = this.series.find((o) => o.classify === classify)
      this.activeDesc = activeSeries.desc
      this.activeLabel = activeSeries.classifyName
    },
    /**
     * 提交专题编辑
     */
    sendHandler() {
      this.$ajax.updateSeries(this.series).then(() => {
        console.log('更新成功')
      })
    },
    /**
     * 增加专题分类
     */
    addOkHandler(data) {
      this.series.push(data)
      this.tabValue = data.classify
      this.activeLabel = data.classifyName
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
