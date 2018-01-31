<template>
  <Table
    ref="selection"
    :columns="columns4"
    :data="datas"></Table>
</template>
<script>
export default {
  props: {
    datas: {
      type: Array,
      default: () => ([]),
    },
  },
  data() {
    return {
      columns4: [
        {
          type: 'selection',
          width: 60,
          align: 'center',
        },
        {
          title: '日期',
          key: 'createTime',
          width: 160,
          sortable: true,
          align: 'center',
        },
        {
          title: '文章标题',
          key: 'title',
          align: 'center',
          render: (h, params) => {
            return [
              h('Button', {
                props: {
                  type: 'text',
                  size: 'small',
                  icon: 'ios-redo',
                },
                style: {
                  marginRight: '5px',
                },
                on: {
                  click: () => {
                    this.openWindow(params.row)
                  },
                },
              }, 'dddfdfdf'),
            ]
          },
        },
        {
          title: '专题',
          key: 'classifyName',
          align: 'center',
          width: 270,
          filters: [
            { label: '技术', value: 1 },
            { label: '散文', value: 2 },
          ],
          filterMethod(value, row) {
            if (value === 1) {
              return row.classify > 25
            } else if (value === 2) {
              return row.classify < 25
            }
          },
        },
        {
          title: '状态',
          key: 'isShow',
          width: 210,
          align: 'center',
          filters: [
            { label: '已显示', value: 1 },
            { label: '未显示', value: 2 },
          ],
          filterMultiple: false,
          filterMethod(value, row) {
            if (value === 1) {
              return row.tags > 25
            } else if (value === 2) {
              return row.tags < 25
            }
          },
          render: (h, params) => {
            return [
              h('i-switch', {
                props: {
                  size: 'default',
                  value: params.row.isShow,
                },
                on: {
                  change: (state) => {
                    this.switchHandle(params.index, state)
                  },
                },
              }, ''),
            ]
          },
        },
        {
          title: '操作',
          key: 'action',
          width: 260,
          align: 'center',
          render: (h, params) => {
            return [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small',
                  icon: 'compose',
                },
                style: {
                  marginRight: '5px',
                },
                on: {
                  click: () => {
                    this.toEditPage(params.index, params)
                  },
                },
              }, '编辑'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small',
                  icon: 'trash-a',
                },
                on: {
                  click: () => {
                    this.remove(params, params.index)
                  },
                },
              }, '删除'),
            ]
          },
        },
      ],
    }
  },
  methods: {
    toEditPage(index, param) {
      this.$router.push({name: 'article-edit', query: {uuid: param.row.uuid}})
    },
    remove(params, index) {
      this.$Modal.confirm({
        title: '确认框',
        content: '确定删除该条信息么? 删除后将无法找回。',
        onOk: () => {
          this.$emit('removeHandler', params, index)
        },
      })
    },
    switchHandle(i, state) {
      console.log(i, state)
    },
    openWindow(row) {
      window.open(`https://www.isyxf.com/article/${row.articleId}`)
    },
  },
}
</script>
