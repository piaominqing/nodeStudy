// 纯cookie 缺点：可以在浏览器中修改
// const http = require('http')

// http.createServer((req, res) => {
//     if(req.url === 'favicon.ico'){
//         res.end('')
//         return
//     }
//     console.log('cookie:', req.headers.cookie)
//     //设置cookie
//     res.setHeader('Set-Cookie', 'cookie1=abc')
//     res.end('hello cookie!!')
// })
// .listen(3000)

// session原理
const http = require('http')
const session = {}
http.createServer((req, res) => {
    // 观察cookie存在
    console.log('cookie:', req.headers.cookie)
    const sessionKey = 'sid'
    const cookie = req.headers.cookie
    if(cookie && cookie.indexOf(sessionKey) > -1){
        res.end('Come Back')
        const pattern = new RegExp(`${sessionKey}=([^;]+);?\s*`)
        const sid = pattern.exec(cookie)[1]
        console.log('session:', sid, session, session[sid])
    }else{
        const sid =(Math.random() * 99999999).toFixed()
        res.setHeader('Set-Cookie', `${sessionKey}=${sid};`)
        session[sid]  = {name : 'laowang'}
        res.end('Hello')
    }
    res.end('hello cookie!!')
})
.listen(3000)