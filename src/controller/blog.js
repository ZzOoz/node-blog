const getList = (author, keyWord) => {
    // 返回假数据 
    return [
        {
            id: 1,
            title: '标题a',
            author: 'zhangshan',
            content: '内容a',
            createTime: 15466104944422
        },
        {
            id: 2,
            title: '标题b',
            author: 'lisi',
            content: '内容b',
            createTime: 15466104944422
        }
    ]
}

module.exports = {
    getList
}