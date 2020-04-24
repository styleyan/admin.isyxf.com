'use strict'

/**
 * 异常处理
 */
module.exports = function () {
  return async function (ctx, next) {
    // 超时状态返回
    if (ctx.status === 504) {
      ctx.status = 200
      ctx.body = {
        code: '1501',
        message: '网络有些慢，请稍后尝试'
      }
    }
    return next()
  }
}