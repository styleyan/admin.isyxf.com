<template>
  <global-layout>
    <global-container-top :isSearch="false" @addHandle="showDialog"></global-container-top>
    <el-table class="classify-list" :data="tableData">
      <el-table-column label="标题">
        <template slot-scope="scope">
          <i class="iconfont icon-redo"></i>
          <a :href="scope.row.websiteUrl" target="_blank">{{scope.row.websiteName}}</a>
        </template>
      </el-table-column>
      <el-table-column prop="desc" width="300" label="说明"></el-table-column>
      <el-table-column prop="gmtCreate" width="300" label="添加时间"></el-table-column>
      <el-table-column width="160" label="状态">
        <template slot-scope="scope">
          <el-switch
            :active-value="1"
            :inactive-value="0"
            @change="switchChangeHandle($event, scope.row)"
            v-model="scope.row.state">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="showDialog(scope.row)">编辑</el-button>
          <global-popover @submit="handleDelete(scope.row)"></global-popover>
        </template>
      </el-table-column>
    </el-table>
    <global-dialog-classify @submit="dialogSubmitHandle" :itemList="itemList" title="友情链接" ref="globalDialogClassify"></global-dialog-classify>
  </global-layout>
</template>

<script>
import GlobalLayout from '@/components/GlobalLayout.vue'
import GlobalContainerTop from '@/components/GlobalContainerTop.vue'
import GlobalDialogClassify from '@/components/GlobalDialogClassify.vue'
import GlobalPopover from '@/components/GlobalPopover.vue'

export default {
  name: 'linksPage',
  components: { GlobalLayout, GlobalContainerTop, GlobalDialogClassify, GlobalPopover },
  data() {
    return {
      tableData: [],
      itemList: [
        { type: 'input', label: '名称', placeholder: '', key: 'websiteName' },
        { type: 'input', label: 'url', placeholder: '', key: 'websiteUrl' },
        { type: 'radio', label: '分类', key: 'https', radios: [{ label: 'https', key: 1 }, { label: 'http', key: 0 }] },
        { type: 'textarea', label: '描述', placeholder: '', key: 'desc' },
        { type: 'switch', label: '状态', placeholder: '', key: 'state' },
      ],
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    /**
     * 状态更新
     */
    switchChangeHandle(state, row) {
      this.$axios.linksUpdate({
        id: row.id,
        state,
      }).catch(() => {
        row.state = state === 0 ? 1 : 0
      })
    },

    /**
     * 初始化列表
     */
    getList() {
      this.$axios.linksList().then((data) => {
        this.tableData = data
      })
    },

    /**
     * 删除
     */
    handleDelete(row) {
      this.$axios.linksDelete(row.id).then(() => {
        this.getList()
      })
    },

    /**
     * 显示弹框
     */
    showDialog(rowData) {
      this.$refs.globalDialogClassify.toggleVisibleHandle(rowData)
    },

    /**
     * 提交
     */
    dialogSubmitHandle(data, type) {
      let submitType = 'linksAdd'

      if (type === 'update') {
        submitType = 'linksUpdate'
      }

      this.$axios[submitType](data).then(() => {
        this.$message.success('操作成功')
        this.getList()
      })
    },
  },
}
</script>
<style lang="stylus">
.classify-list{
  .icon-redo{
    font-size 12px
    margin-right 4px
  }
  a{
    color #606266
    text-direction none
    &:hover{
      text-direction underline
    }
  }
}
</style>
