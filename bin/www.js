// 基本的启动文件
const http = require('http')

const PORT = 3000
const serverHanlde = require('../app')

const server = http.createServer(serverHanlde)

server.listen(PORT,()=>{
    console.log('server start')
})