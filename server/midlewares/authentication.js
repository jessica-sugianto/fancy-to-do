const jwt = require('jsonwebtoken')

function autehtication(req, res, next) {
    try {
        const token = req.headers.token
        if (!token) {
            res.status(404).json({
                message: 'Token not found'
            })
        } else {
            const decoded = jwt.verify(token, 'jessica-sugianto')
            req.UserId = decoded.userId
            next()
        }
    } catch (error) {
        res.status(400).json({
            message: ''
        })
        console.log(error)
    }
}

module.exports = autehtication