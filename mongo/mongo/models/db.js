const conf = require('./conf')
const EventEmitter = require('events').EventEmitter

const MongoClient = require('mongodb').MongoClient

class MongoDb {
    constructor(options){
        this.conf = options
        this.emitter = new EventEmitter()
        this.client = new MongoClient(conf.url, {useNewUrlParser: true})
        this.client.connect(err => {
            if(err) throw err
            console.log('连接成功！')
            this.emitter.emit('connect')
        })
    }
    col(colName, dbName = conf.dbName){
        return this.client.db(dbName).collection(colName)
    }
    once(eventName, cb){
        this.emitter.once(eventName, cb)
    }
}

module.exports = new MongoDb(conf)