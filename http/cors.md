## cors
跨域：浏览器同源策略略引起的接⼝口调⽤用问题(url，port,协议不同时发生，浏览器的拦截)

1.CORS(Cross Origin Resource Share) - 跨域资源共享，后端⽅方案，解决跨域
解决办法：
响应简单请求: 动词为get/post/head，没有⾃自定义请求头，Content-Type是application/x-wwwform-urlencoded，multipart/form-data或text/plain之⼀一，通过添加以下响应头解决：
res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')

响应preﬂight请求，需要响应浏览器器发出的options请求（预检请求），并根据情况设置响应头：
  res.writeHead(200, {"Access-Control-Allow-Origin": "http://localhost:3000",             "Access-Control-Allow-Headers": "X-Token,Content-Type",             "Access-Control-Allow-Methods": "PUT"});

如果要携带cookie信息，则请求变为credential请求：
预检options中和/users接⼝口中均需添加 
 res.setHeader('Access-Control-Allow-Credentials', 'true'); 
 // 设置cookie 
 res.setHeader('Set-Cookie', 'cookie1=va222;')

2.代理理服务器器
请求同源服务器器，通过该服务器器转发请求⾄至⽬目标服务器器，得到结果再转发给前端。
前端开发中测试服务器器的代理理功能就是采⽤用的该解决⽅方案，但是最终发布上线时如果web应⽤用和 接⼝口服务器器不不在⼀一起仍会跨域
var express = require('express');
const proxy = require('http-proxy-middleware')
console.log(proxy)
const app = express()
app.use(express.static(__dirname + '/'))
app.use('/api', proxy.createProxyMiddleware({ target: 'http://localhost:4000', changeOrigin: false }));
module.exports = app
 对⽐比⼀一下nginx 与webpack devserver
  // vue.config.js  module.exports = {    devServer: {      disableHostCheck: true,      compress: true,      port: 5000,      proxy: {        '/api/': {          target: 'http://localhost:4000',          changeOrigin: true,        },      },    },  }
nginx
 server {      listen       80;      # server_name  www.josephxia.com;      location / {          root   /var/www/html;          index  index.html index.htm;          try_files $uri $uri/ /index.html;      }
      location /api {              proxy_pass  http://127.0.0.1:3000;              proxy_redirect     off;              proxy_set_header   Host             $host;              proxy_set_header   X-Real-IP        $remote_addr;              proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;      }  } 
 