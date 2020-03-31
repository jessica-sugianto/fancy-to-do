const User = require('../models').User
const jwt = require('jsonwebtoken')
const Password = require('../helpers/password')

class UserController {
    static register(req, res) {
        User.create({
                username: req.body.username,
                password: req.body.password,
                role: 'user'
            })
            .then(user => {
                const token = jwt.sign({
                    userId: user.id,
                    username: user.username
                }, 'jessica-sugianto')
                res.status(200).json({ token })
            })
            .catch(err => {
                if (err.message) {
                    res.status(400).json(err.message)
                } else {
                    res.status(500).json(err)
                }
            })
    }

    static login(req, res) {
        User.findOnes({
                where: {
                    username: req.body.username
                }
            })
            .then(user => {
                if (!user) {
                    res.status(400).json({
                        message: 'Username / Password salah'
                    })
                } else {
                    if (!Password.checkPassword(req.body.password, user.password)) {
                        res.status(400).json({
                            message: 'Username / Password salah'
                        })
                    } else {
                        const token = jwt.sign({
                                userId: user.id,
                                username: user.username
                            }, 'jessica-sugianto')
                            // req.headers['token'] = token
                        res.status(200).json({ token })
                    }
                }
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}

module.exports = UserController