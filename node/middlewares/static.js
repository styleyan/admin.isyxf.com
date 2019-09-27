'use strict'

/**
 * only deal GET:
 */

const path = require('path')
const koaStatic = require('koa-static-cache')
const LRU = require('lru-cache')

const FILE_MAX_AGE = 3600 * 24 * 1000
const files = new LRU({
  // max: 1000 * 1000, // 1MB
  // size 使用不了，改成计算cache文件个数
  max: 30, // 1MB
  length(n, key) {
    return 1
  },
  dispose(key, n) { },
  maxAge: FILE_MAX_AGE,
})
const staticMW = koaStatic(path.join(__dirname, '../../dist'), {
  buffer: true,
  // 开启 gzip 后每次会从 zip buffer
  gzip: true,
  dynamic: true,
  preload: false,
  files: files,
})
// 找不到静态资源/请求 Method 不为 HEAD 或 GET: 禁止next()
const stopNext = (ctx) => () => {
  ctx.status = 404
  ctx.body = ''
}

module.exports = async (ctx, next) => {
  if (ctx.path.startsWith('/favicon.ico')) {
    ctx.url = '/favicon.ico'
    return staticMW(ctx, stopNext(ctx))
  }
  // 只要不是 /static/ 和 /api/ 路径的，都返回 index.html 静态文件
  if (!ctx.path.startsWith('/static/') && !ctx.path.startsWith('/api/')) {
    ctx.url = '/index.html'
    return staticMW(ctx, stopNext(ctx))
  }
  if (ctx.path.startsWith('/static/')) {
    return staticMW(ctx, stopNext(ctx))
  }
  return next()
}
