// get方法获取参数
// const http = require('http')
// const querystring = require('querystring')

// const server = http.createServer((req,res)=>{
//     const method = req.method
//     // 使用querystring将分割的参数序列化 
//     req.query = querystring.parse(req.url.split('?')[1])
//     const stringifyQuery = JSON.stringify(req.query)
//     res.end(stringifyQuery)
// })

// server.listen(3000,()=>{
//     console.log('start')
// })

// post方法获取参数
// const http = require('http')

// const server = http.createServer((req, res) => {
//     if (req.method.toLowerCase() === 'post') {
//         console.log('content-type', req.headers['content-type'])
//         let postData = ''
//         req.on('data', (chunk) => {
//             postData += chunk.toString()
//         })
//         req.on('end', () => {
//             console.log(postData)
//             res.end('hello world')
//         })
//     }
// })

// server.listen(3000,()=>{
//     console.log('ok')
// })

// 综合实例同时使用get和post获取数据
const http = require('http')
const querystring = require('querystring')

const server = http.createServer((req, res) => {
    const url = req.url
    const method = req.method
    const path = url.split('?')[0]
    const query = querystring.parse(url.split("?")[1])

    // 设置头部为json格式 即后端返回的是json格式的字符串
    res.setHeader('Content-type','application/json')

    // 返回的数据
    const responseData = {
        url,
        method,
        path,
        query
    }

    if(req.method.toLowerCase() === 'get'){
        // 返回json格式的字符串
        res.end(JSON.stringify(responseData))
    }else{
        let postData = ''
        req.on('data',chunk => {
            postData += chunk.toString()
        })
        req.on('end',()=>{
            responseData.postData = postData
            res.end(JSON.stringify(responseData))
        })
    }
})

server.listen(3000,()=>{
    console.log('already')
})