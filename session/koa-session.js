// 真正的session
const koa = require('koa')
const app = new koa()
const session = require('koa-session')
// 秘钥
app.keys = ['some secret']

// 配置项
const SESS_CONFIG = {
    key: 'kkb:sess',// cookie键名
    maxAge: 86400000,
    httpOnly: true, // 仅服务器修改
    signed: true //签名cookie
}
app.use(session(SESS_CONFIG, app))

app.use(ctx => {
    if(ctx.path === '/favicon.ico'){
        return
    }
    let n = ctx.session.count || 0
    ctx.session.count = ++n;
    ctx.body = `第${n}次访问`
    
})
app.listen(3000)