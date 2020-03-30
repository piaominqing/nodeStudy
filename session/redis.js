const redis = require('redis')
// windows 启动server redis-server.exe redis.windows.conf
const client = redis.createClient(6379, 'localhost')

client.set('hello', 'This is a value')

client.get('hello', (err, v) => {
    console.log('redis get ', v)
})