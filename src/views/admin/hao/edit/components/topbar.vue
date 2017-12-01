<template>
  <Row class="wrap-topbar">
    <Col span="12">
      <Button icon="trash-a" type="error">删除</Button>
    </Col>
    <Col span="12" class="col-right">
      <Select v-model="model10" clearable multiple style="width:260px">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
      <Tooltip content="添加导航" placement="left">
        <span @click="showModalHandle"><Icon type="compose"></Icon></span>
      </Tooltip>
    </Col>
  </Row>
</template>
<script>
export default {
  data() {
    return {
      cityList: [
        {
          value: 'New York',
          label: 'New York',
        },
        {
          value: 'London',
          label: 'London',
        },
      ],
      model10: [],
    }
  },
  methods: {
    /**
     *显示编辑框
     */
    showModalHandle() {
      this.$emit('modalHandle')
    },
  },
}
</script>
<style lang="stylus">
.wrap-topbar{
  margin-bottom: 12px
  .col-right {
    text-align : right 
  }
  .ivu-tooltip {
    cursor: pointer
    font-size: 22px
  }
  .ivu-select-multiple {
    margin-right: 11px
    vertical-align: top
    text-align : left 
  }
}
</style>