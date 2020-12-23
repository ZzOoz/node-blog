const handleRouter = (req, res) => {
    const method = req.method
    const url = req.url

    // 登录
    if(method === 'POST' && req.path === '/api/blog/user'){
        return {
            msg:'登录接口'
        }
    }
    
}

module.exports = handleRouter