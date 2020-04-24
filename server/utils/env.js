'use strict'

/**
 * 获取配置
 */
const fs = require('fs')
const path = require('path')
const NODE_ENV = process.env.NODE_ENV

let fileName = 'admin-isyxf-web'

if (NODE_ENV === 'dev') {
  fileName = 'admin-isyxf-web-dev'
}

const cFilePath = path.join(__dirname, `../../config/${fileName}.properties`)
const data = JSON.parse(fs.readFileSync(cFilePath).toString().replace(/\s*/g,""))

module.exports = data