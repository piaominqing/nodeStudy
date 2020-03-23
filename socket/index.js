const net = require('net')
// tcp协议
const chatServer = net.createServer()
const clientList = []

chatServer.on('connection', client => {
    client.write('Hi!\n')
    clientList.push(client)
    client.on('data', data => {
        clientList.forEach(client =>{
            client.write(data)
        })
    })
})
chatServer.listen(9000)
// telnet localhost 9000