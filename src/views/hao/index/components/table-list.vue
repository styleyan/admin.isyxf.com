<template>
    <Table :columns="columns6" :data="data5"></Table>
</template>
<script>
export default {
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
          key: 'date',
        },
        {
          title: '网站名称',
          key: 'name',
        },
        {
          title: '链接地址',
          key: 'url',
        },
        {
          title: '点赞数量',
          key: 'favor',
        },
        {
          title: '收藏人数',
          key: 'watch',
        },
        {
          title: '所处分类',
          key: 'typeName',
        },
        {
          title: '网站描述',
          key: 'desc',
        },
        {
          title: '操作',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small',
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
                },
                on: {
                  click: () => {
                    this.remove(params.index)
                  },
                },
              }, '删除'),
            ])
          },
        },
      ],
      data5: [
        {
          date: '2016-10-03',
          name: '秀8',
          url: 'http://www.xiu8.com',
          favor: 300,
          watch: 200,
          typeName: '社区学习',
          desc: 'New York No. 1 Lake Park',
          logo: 'http://chuangzaoshi.com/assets/images/C/bootstrap.png',
        },
        {
          date: '2016-10-23',
          name: '5755',
          url: 'http://www.5755.com',
          favor: 8000,
          watch: 100,
          typeName: '前端框架',
          desc: '折是个已是东方神就的网站',
          logo: 'http://chuangzaoshi.com/assets/images/C/bootstrap.png',
        },
      ],
    }
  },
  methods: {
    show(index) {
      this.$Modal.info({
        title: 'User Info',
        content: `Name：${this.data5[index].name}<br>Age：${this.data5[index].age}<br>Address：${this.data5[index].address}`,
      })
    },
    remove(index) {
      this.data5.splice(index, 1)
    },
  },
}
</script>