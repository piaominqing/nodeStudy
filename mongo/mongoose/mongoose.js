const mongoose = require('mongoose')
//连接
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true})

const conn = mongoose.connection
conn.on('error', () => console.error('数据库连接失败！'))
conn.once('open', async () => {
    const Schema = mongoose.Schema({
        category: String,
        name: String
    })
    const Model = mongoose.model('fruit', Schema)
    try {
        let ret = await Model.create({
            category: '温带水果',
            name: '苹果',
            price: 5
        })
        console.log('插入数据:', ret)
        ret = await Model.find({name: '苹果'})
        console.log('查询结果:', ret)

        ret = await Model.updateOne({name: '苹果'}, {$set: {name: '芒果'}})
        console.log('更新结果:', ret)

        ret = await Model.deleteOne({name: '苹果'})
        console.log('删除结果:', ret)
    } catch (error) {
        console.log(error)
    }
})

