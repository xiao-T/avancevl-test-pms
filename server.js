/**
 * server
 * by xiaoT
 */

const Koa = require('koa')
const static = require('koa-static')
const app = new Koa()

app.use(static('./dist'))

app.listen()

console.log('server run on port: default')