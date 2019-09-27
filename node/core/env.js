'use strict'

const fs = require('fs')
const path = require('path')

const cFilePath = path.join(__dirname, '../../ds-web.properties')
const data = JSON.parse(fs.readFileSync(cFilePath).toString())
const IP = {
  'hz-prod': '47.99.247.50:8080',
  'dev': '47.99.247.50:8080',
}
module.exports = {
  host: IP[data.IP],
}
