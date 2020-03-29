(async () => {
    const { MongoClient: MongoDB } = require('mongodb')
    const client = new MongoDB(
        'mongodb://localhost:27017',
        {
            useNewUrlParser: true
        }
    )

    let ret

    ret = await client.connect()
    console.log('connect', ret)

    const db = client.db('test')
    console.log('db', db)

    const fruits = db.collection('fruits')
    console.log('fruits', fruits)

    ret = await fruits.insertOne({
        name: '芒果',
        price: 20.1
    })
    console.log('插入成功！', JSON.stringify(ret))

    ret = await fruits.findOne()    
    console.log('查询⽂文档:', ret) 

    ret = await fruits.updateOne({ name: '芒果' },     
        { $set: { name: '苹果' } }
    )    
    console.log('更更新⽂文档', JSON.stringify(ret.result)) 

    ret = await fruits.deleteOne({name: '苹果'}) 

    await fruits.deleteMany()

    client.close() 
})()

// ⽐比较$eq，$gt，$gte，$in等 
await col.find({price:{$gt:10}}).toArray()
// 逻辑$and,$not,$nor,$or // price>10 或 price<5 
await col.find({$or: [{price:{$gt:10}},{price:{$lt:5}}]}) 
// price不不⼤大于10且price不不⼩小于5 
await col.find({$nor: [{price:{$gt:10}},{price:{$lt:5}}]}) 
// 元素$exists，$type 
await col.insertOne({ name: "芒果", price: 20.0, stack:true }) 
await col.find({stack:{$exists:true}})
// 模拟$regex，$text，$expr 
await col.find({name:{$regex:/芒/}}) 
await col.createIndex({name:'text'}) 
// 验证⽂文本搜索需⾸首先对字段加索引 
await col.find({$text:{$search:'芒果'}}) 
// 按词搜索，单独字查询不不出结果
// 数组$all,$elemMatch,$size col.insertOne({..., tags: ["热带", "甜"]}) 
// 插⼊入带标签数据 
// $all：查询指定字段包含所有指定内容的⽂文档 
await col.find({ tags: {$all:['热带','甜'] } } )
// $elemMatch: 指定字段数组中⾄至少有⼀一个元素满⾜足所有查询规则  
await col.insertOne({hisPrice: [20,25,30]})
// 数据准备 
col.find({ hisPrice: { $elemMatch: { $gt: 24,$lt:26 } } }) 
// 历史价位有 没有出现在24~26之间
// 地理理空间$geoIntersects,$geoWithin,$near,$nearSphere 
// 创建stations集合 
const stations = db.collection("stations"); 
// 添加测试数据，执⾏行行⼀一次即可 
await stations.insertMany([       
    { name: "天安⻔门东", loc: [116.407851, 39.91408] },      
    { name: "天安⻔门⻄西", loc: [116.398056, 39.913723] },      
    { name: "王府井", loc: [116.417809, 39.91435] } 
]); 
await stations.createIndex({ loc: "2dsphere" }); 
r = await stations.find({  
    loc: {    
        $nearSphere: {          
            $geometry: {              
                type: "Point",              
                coordinates: [116.403847, 39.915526]            
            },            
            $maxDistance: 1000        
        }    
    } 
}).toArray(); 
console.log("天安⻔门附近地铁站", r);


