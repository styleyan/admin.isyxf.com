'use strict'

module.exports = function () {
  return async function (ctx, next) {
    if (ctx.path === '/ok.htm') {
      ctx.body = 'ok'
      return
    }
    await next()
  }
}