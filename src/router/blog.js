const { getList } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/responseModel')
const handleRouter = (req, res) => {
    const method = req.method
    const url = req.url

    // 获取一个博客列表
    if (method === 'GET' && req.path === '/api/blog/list') {
        // 获取必要的参数格式
        const author = req.query.author || ''
        const keyWord = req.query.keyWord || ''
        const listData = getList(author, keyWord)
        return new SuccessModel(listData)
    }

    if (method === 'GET' && req.path === '/api/blog/detail') {
        return {
            msg: '获取博客详情接口'
        }
    }

    if (method === 'POST' && req.path === '/api/blog/new') {
        return {
            msg: '新建博客接口'
        }
    }

    if (method === 'POST' && req.path === '/api/blog/update') {
        return {
            msg: '更新博客接口'
        }
    }

    if (method === 'POST' && req.path === '/api/blog/delete') {
        return {
            msg: '删除博客接口'
        }
    }
}

module.exports = handleRouter