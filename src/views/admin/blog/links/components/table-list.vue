<template>
    <Table :columns="columns6" :data="linkList"></Table>
</template>
<script>
export default {
  nama: 'hao-table-list',
  props: {
    linkList: {
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
          align: 'center',
          width: 160,
        },
        {
          title: '网站名称',
          key: 'websiteName',
          align: 'center',
        },
        {
          title: '链接地址',
          key: 'websiteUrl',
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
                  icon: params.row.classify ? 'locked' : 'ios-redo',
                },
                style: {
                  marginRight: '5px',
                },
                on: {
                  click: () => {
                    this.openWindow(params.row)
                  },
                },
              }, params.row.websiteUrl),

            ]
          },
        },
        {
          title: '网站描述',
          key: 'desc',
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
    show(index) {
      console.log(index)
    },
    remove(index) {
      console.log(this.linkList[index])
    },
    openWindow(row) {
      window.open(row.websiteUrl)
    },
  },
}
</script>
