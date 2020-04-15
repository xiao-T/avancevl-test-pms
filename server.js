/**
 * server
 * by xiaoT
 */

const Koa = require('koa')
const static = require('koa-static')
const app = new Koa()
const port = process.env.PORT || 8080
app.use(static('./build'))

app.listen(port)

console.log(`server run on port: ${port}`)
// const http = require('http')

// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.end('hhh')
// })

// server.listen(8888, () => {
//   console.log('server run on port 8080 by node http')
// })
