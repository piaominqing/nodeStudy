const express = require('express')
const app = express()
const path = require('path')
const mongoDb = require('./models/db')
require("./initData")


app.get('/', (req, res) => {
    res.sendFile(path.resolve('./index.html'))
})

app.get('/api/list',async (req, res) => { 
    const {page, category ,keyword} = req.query
    try {
        // 构造条件    
        const condition = {}    
        if (category) {        
            condition.category = category    
        }
        if (keyword) {        
            condition.name = { $regex: new RegExp(keyword)  }    
        } 
        const col = mongoDb.col('fruits')
        const total = await col.find(condition).count()
        const fruits = await col.find(condition).skip((page - 1)* 5).limit(5).toArray()
        res.json({ok: 1, data: {fruits, pagination: {page, total}}})
    } catch (error) {
        console.log(error)
    }
})

app.get('/api/category', async (req, res) => {
    const col = mongoDb.col('fruits')
    const data = await col.distinct('category')
    res.json({ok: 1, data})
})



app.listen(3000)