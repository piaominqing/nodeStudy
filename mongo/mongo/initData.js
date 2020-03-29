const mongoDb = require('./models/db')

mongoDb.once('connect', async () => {
    const col = mongoDb.col('fruits')
    // 删除已存在
    await col.deleteMany()
    const data = new Array(100).fill().map((v, i) => {
        return {
            name: 'xxx' + i,
            price: i,
            category: Math.random() > 0.5 ? '蔬菜' : '水果'
        }
    })

    await col.insertMany(data)
    console.log('插入测试数据成功！')
})