 
// const express = require('express') 
// const app = express() 
// app.use(express.static(__dirname + '/')) 
// module.exports =app

// 反向代理
var express = require('express');
const proxy = require('http-proxy-middleware')
console.log(proxy)
const app = express()
app.use(express.static(__dirname + '/'))
app.use('/api', proxy.createProxyMiddleware({ target: 'http://localhost:4000', changeOrigin: false }));
module.exports = app
 