const jwt = require('jsonwebtoken')

function autehtication(req, res, next) {
    try {
        const token = req.headers.token
        if (!token) {
            res.status(404).json({
                message: 'Token not found'
            })
        } else {
            const decoded = jwt.verify(token, process.env.SECRET)
            if (decoded.userId) {
                req.UserId = decoded.userId
            } else {
                req.UserId = decoded.id
            }
            next()
        }
    } catch (error) {
        res.status(500).json({
            message: 'internal server error'
        })
        console.log(error)
    }
}

module.exports = autehtication