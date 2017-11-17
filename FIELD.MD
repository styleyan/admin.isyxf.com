## 字段定义

`新增文章页,文章列表` 字段定义
```javascript
{
  // uuid值
  id: 'xxxx',
  // 文章标题
  title: '',
  // 文章内容
  content: '',
  // 文章分类
  classify: 1,
  // 文章标签 [{value: 1, label: '优化'}]
  tags: [{value: 1, label: '优化'}, {value: 2, label: 'js'}],
  // 发布日期
  dateTime: '2017-11-29 18:20:40',
  // 是否显示文章,默认为true
  isShow: true,
}
```

`hao.isyxf.com列表` 字段定义
```javascript
{
  // uuid值
  id: 'xxxx',
  // 发布日期
  dateTime: '2017-11-29 18:20:40',
  // 网站名称
  websiteName: '秀8',
  // 网站链接地址
  websiteUrl: 'https://www.xiu8.com',
  // 网站描述
  websiteDesc: '这是一个神奇的网站',
  // 网站分类
  type: 1,
  // 网站分类名称
  typeName: '技术文章',
  // 关注人数
  watch: 10,
  // 点赞数量
  favour: 999,
}
```

## 接口列表

> `admin登录接口`: /api/admin/login
```javascript
// 请求参数
{
  userName: '', // 用户名
  userPwd: '', // 用户密码
}

// 响应参数
{
  status: 0, // 请求状态(0:失败，1: 成功)
  msg: '', // 错误提示文字
  errorCode: '', // 错误码
  result: {}, // 返回结果
}
```

>  `新增文章接口`: /api/article/add
