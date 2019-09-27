'use strict'

const fetch = require('node-fetch')
const host = '47.99.247.50:8080'

module.exports = function () {
  return async function (ctx) {
    const serverApi = `http://${host}${ctx.request.url}`
    const requestMethod = ctx.request.method
    const param = {
      method: requestMethod,
      headers: ctx.request.header,
    }

    if (requestMethod === 'POST') {
      param.body = JSON.stringify(ctx.request.body)
    }

    // fetch: https://www.npmjs.com/package/node-fetch
    return fetch(serverApi, param).then(res => {
      // 获取返回cookies
      const cookies = res.headers.raw()['set-cookie']
      ctx.cookies.set(cookies)
      ctx.set('Content-Type', 'application/json;charset=UTF-8')

      ctx.body = res.body
    })
  }
}
