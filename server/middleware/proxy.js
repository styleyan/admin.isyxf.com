'use strict'

/**
 * 代理配置
 * 代理模块: https://github.com/nsimmons/koa-better-http-proxy
 */
const env = require('../utils/env')
const c2k = require('koa2-connect')
const proxy = require('http-proxy-middleware');

module.exports = function () {
  return c2k(proxy({
    target: env.proxy.address,
    changeOrigin: true
  }))
}