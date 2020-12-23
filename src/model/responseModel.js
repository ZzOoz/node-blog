class BaseModel {
    // 接受一个data对象和message
    constructor(data, message) {
        // 如果只有message data没有传入，那么参数前置
        if (typeof data === 'string') {
            this.message = data
            data = null
            message = null
        }

        if (data) {
            this.data = data
        }

        if (message) {
            this.message = message
        }
    }
}

// 成功的返回类型
class SuccessModel extends BaseModel {
    constructor(data, message) {
        super(data, message)
        this.errorNo = 0
    }
}

// 失败的返回类型
class ErrorModel extends BaseModel {
    constructor(data, message) {
        super(data, message)
        this.errorNo = -1
    }
}

module.exports = {
    SuccessModel,
    ErrorModel
}