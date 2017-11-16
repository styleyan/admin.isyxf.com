<template>
  <div class="wrap-topbar">
    <Tooltip content="添加导航" placement="left">
      <Icon type="compose"></Icon>
    </Tooltip>
    <Button icon="trash-a" type="error">删除选中</Button>
    <Select v-model="model10" clearable multiple style="width:260px">
      <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
  </div>
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
  margin-bottom: 16px
  .ivu-tooltip {
    cursor: pointer
    float: right
    font-size: 22px
    margin-top: 6px
  }
}
</style>