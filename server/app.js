'use strict'

const Koa = require('koa')
const proxy = require('./middleware/proxy');
const statics = require('./middleware/static')
const ok = require('./middleware/ok')
const error = require('./middleware/error')
const env = require('./utils/env')
const app = new Koa()

app.use(ok())
app.use(statics())
app.use(proxy())
app.use(error())

const server = app.listen(env.port, function () {
  const host = server.address().address
  const port = server.address().port

  console.log('应用实例，访问地址为 http://%s:%s', host, port)
})
