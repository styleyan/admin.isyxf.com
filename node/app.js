'use strict'

const Koa = require('koa')
const koaBody = require('koa-body')
const statics = require('./middlewares/static')
const proxy = require('./middlewares/proxy')
const ok = require('./middlewares/ok.js')
const app = new Koa()

app.use(koaBody())
app.use(ok())
app.use(statics)
app.use(proxy())

var server = app.listen(8088, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('应用实例，访问地址为 http://%s:%s', host, port)
})
