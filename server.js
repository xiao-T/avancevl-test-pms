/**
 * server
 * by xiaoT
 */

const Koa = require('koa')
const static = require('koa-static')
const app = new Koa()

app.use(static('./dist'))

app.listen(3000)

console.log('server run on port: 3000')