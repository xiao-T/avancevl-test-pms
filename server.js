/**
 * server
 * by xiaoT
 */

// const Koa = require('koa')
// const static = require('koa-static')
// const app = new Koa()

// app.use(static('./dist'))

// app.listen(8080)

// console.log('server run on port: 8080')
const http = require('http')

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.end('hhh')
})

server.listen(8888, () => {
  console.log('server run on port 8080 by node http')
})
