'use strict'

const fetch = require('node-fetch')
const evn = require('../core/env')

module.exports = function () {
  return async function (ctx) {
    const serverApi = `http://${evn.host}${ctx.request.url}`
    const requestMethod = ctx.request.method
    const param = {
      method: requestMethod,
      headers: ctx.request.header,
    }

    console.log(serverApi)
    console.log(requestMethod)

    if (requestMethod === 'POST') {
      param.body = JSON.stringify(ctx.request.body)
    }
    return fetch(serverApi, param).then(res => {
      ctx.set('Content-Type', 'application/json;charset=UTF-8')
      ctx.body = res.body
    })
  }
}
