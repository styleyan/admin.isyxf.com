'use strict'

/**
 * 健康检测，公司规范用来判断服务是否挂掉
 */
module.exports = function () {
  return async function (ctx, next) {
    if (ctx.path === '/ok.htm') {
      ctx.body = 'ok'
      return
    }
    await next()
  }
}