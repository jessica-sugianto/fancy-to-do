const Todo = require('../models').Todo

function authorization(req, res, next) {
    Todo.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(todo => {
            if (!todo) {
                res.status(404).json({
                    message: 'todo not found'
                })
            } else {
                if (todo.UserId === req.UserId) {
                    next()
                } else {
                    res.status(400).json({
                        message: "access forbidden"
                    })
                }
            }
        })
        .catch(err => {
            res.status(500).json({
                message: 'internal server error'
            })
        })
}

module.exports = authorization