<template>
  <div class="wrap-mavon-edit">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="文章标题" prop="name">
          <Input v-model="formValidate.name"></Input>
        </FormItem>
        <FormItem label="文章内容" prop="desc">
          <!-- v-model="formValidate.desc" -->
          <my-mavon-editor></my-mavon-editor>
        </FormItem>
        <FormItem label="文章分类" prop="type">
          <Select v-model="formValidate.type" style="width:260px">
            <Option v-for="item in cityList2" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </FormItem>
        <FormItem label="文章标签">
          <Select v-model="formValidate.tags" multiple style="width:260px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </FormItem>
        <FormItem label="发布日期" prop="date">
          <DatePicker type="date" placement="top-start" placeholder="请选择发布日期，默认为当前日期" v-model="formValidate.date" style="width: 260px"></DatePicker>
        </FormItem>
        <FormItem label="是否显示">
          <i-switch v-model="formValidate.switch" size="large">
            <span slot="open">显示</span>
            <span slot="close">隐藏</span>
          </i-switch>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
            <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
        </FormItem>
    </Form>
  </div>
</template>
<script>
import myMavonEditor from './components/my-mavon-editor.vue'
export default {
  name: 'www',
  components: { myMavonEditor },
  data() {
    return {
      cityList: [
        {
          value: 'New York',
          label: 'New York',
        },
        {
          value: 'Paris',
          label: 'Paris',
        },
        {
          value: 'Canberra',
          label: 'Canberra',
        },
      ],
      cityList2: [
        {
          value: 1,
          label: '技术',
        },
        {
          value: 2,
          label: '散文',
        },
      ],
      formValidate: {
        name: '',
        mail: '',
        city: '',
        gender: '',
        interest: [],
        date: '',
        switch: true,
        time: '',
        desc: '',
        tags: [],
        type: '',
      },
      ruleValidate: {
        name: [
            { required: true, message: 'The name cannot be empty', trigger: 'blur' },
        ],
        mail: [
            { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
            { type: 'email', message: 'Incorrect email format', trigger: 'blur' },
        ],
        city: [
            { required: true, message: 'Please select the city', trigger: 'change' },
        ],
        gender: [
            { required: true, message: 'Please select gender', trigger: 'change' },
        ],
        interest: [
            { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
            { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' },
        ],
        date: [
            { required: true, type: 'date', message: 'Please select the date', trigger: 'change' },
        ],
        time: [
            { required: true, type: 'date', message: 'Please select time', trigger: 'change' },
        ],
        desc: [
            { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
            { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!')
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    handleReset(name) {
      this.$refs[name].resetFields()
    },
  },
}
</script>
<style lang="stylus">
.wrap-mavon-edit {
  .ivu-date-picker {
    .ivu-select-dropdown {
      z-index : 2000
    }
  }
}
</style>
