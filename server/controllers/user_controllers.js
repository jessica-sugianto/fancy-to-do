const User = require('../models').User

class UserController {
    static register(req, res) {
        User.create({
                username: req.body.username,
                password: req.body.password,
                role: 'user'
            })
            .then(user => {
                res.status(200).json(user)
            })
            .catch(err => {
                if (err.message) {
                    res.status(400).json(err.message)
                } else {
                    res.status(500).json(err)
                }
            })
    }
}

module.exports = UserController