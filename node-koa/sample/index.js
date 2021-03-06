const Koa = require('koa')
const app = new Koa()
app.use(async (ctx, next)=>{
    const start = new Date().getTime()
    console.log(`start: ${ctx.url}`)
    await next()
    const end = new Date().getTime()
    console.log(`请求${ctx.url}, 耗时${end - start}ms`)
})
app.use((ctx, next)=>{
    ctx.body = [
        {
            name: 'tom'
        }
    ]
})

app.listen(3000)