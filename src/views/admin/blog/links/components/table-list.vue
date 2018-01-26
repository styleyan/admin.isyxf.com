<template>
    <Table :columns="columns6" :data="websiteList"></Table>
</template>
<script>
export default {
  nama: 'hao-table-list',
  props: {
    websiteList: {
      type: Array,
      default: () => ([]),
    },
  },
  data() {
    return {
      columns6: [
        {
          type: 'selection',
          width: 60,
          align: 'center',
        },
        {
          title: '创建时间',
          key: 'createTime',
          width: 160,
          align: 'center',
        },
        {
          title: '网站名称',
          key: 'websiteName',
          width: 160,
          align: 'center',
        },
        {
          title: '网站描述',
          key: 'websiteDesc',
          align: 'center',
        },
        {
          title: '所处分类',
          key: 'typeName',
          width: 90,
          align: 'center',
        },
        {
          title: '链接地址',
          key: 'websiteUrl',
          width: 200,
          align: 'center',
          render: (h, params) => {
            if (params.row.websiteUrl === '#') {
              return '无'
            }
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
              }, '预览'),
            ]
          },
        },
        {
          title: '点赞数量',
          key: 'favour',
          width: 90,
          align: 'center',
        },
        {
          title: '收藏人数',
          key: 'watch',
          width: 90,
          align: 'center',
        },
        {
          title: '操作',
          key: 'action',
          width: 160,
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
                    this.show(params.index)
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
                    this.remove(params.index)
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
    show(index) {},
    remove(index) {
      // this.data5.splice(index, 1)
    },
    openWindow(row) {
      window.open(row.websiteUrl)
    },
  },
}
</script>
