<template>
  <Table
    ref="selection"
    :columns="columns4"
    :data="data1"></Table>
</template>
<script>
export default {
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
          key: 'date',
          width: 160,
          sortable: true,
          align: 'center',
        },
        {
          title: '文章标题',
          key: 'title',
          align: 'center',
        },
        {
          title: '文章分类',
          key: 'typeName',
          align: 'center',
          width: 170,
          filters: [
            { label: '技术', value: 1 },
            { label: '散文', value: 2 },
          ],
          filterMethod(value, row) {
            if (value === 1) {
              return row.type > 25
            } else if (value === 2) {
              return row.type < 25
            }
          },
        },
        {
          title: '文章标签',
          key: 'tags',
          align: 'center',
          filters: [
            { label: '运维', value: 1 },
            { label: '数据库', value: 2 },
          ],
          filterMethod(value, row) {
            if (value === 1) {
              return row.tags > 25
            } else if (value === 2) {
              return row.tags < 25
            }
          },
        },
        {
          title: '状态',
          key: 'statusText',
          width: 110,
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
        },
        {
          title: '操作',
          key: 'action',
          width: 170,
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
              }, '修改'),
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
      data1: [
        {
          status: 0,
          statusText: '未显示',
          title: 'New York No. 1 Lake Park',
          date: '2016-10-03 12:30:20',
          type: 1,
          typeName: 'javascript',
          tags: '技术，散文',
        },
      ],
    }
  },
  methods: {
    show(index) {
      console.log(index)
    },
    remove(index) {
      console.log(index)
    },
  },
}
</script>
