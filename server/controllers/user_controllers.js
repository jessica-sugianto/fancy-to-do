const User = require('../models').User
const jwt = require('jsonwebtoken')
const Password = require('../helpers/password')
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

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

    static login(req, res) {
        // console.log(req.body)
        User.findOne({
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
                        }, process.env.SECRET)
                        res.status(200).json({ token })
                    }
                }
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static loginOAuth = (req, res) => {
        const token = req.body.token
        const user = {}
        client.verifyIdToken({
                idToken: token,
                audience: process.env.GOOGLE_CLIENT_ID
            })
            .then(result => {
                const payload = result.getPayload()
                console.log(payload)
                user.username = payload.name
                user.email = payload.email
                user.password = '123ToDo456'
                user.role = 'user'

                return User.findOne({
                    where: {
                        email: user.email
                    }
                })
            })
            .then(result => {
                if (result) {
                    return result
                } else {
                    return User.create(user)
                }
            })
            .then(result => {
                console.log(result)
                const user = {
                    id: result.id,
                    name: result.name,
                    email: result.email
                }

                res.status(200).json({
                    token: jwt.sign(user, process.env.SECRET)
                })
            })
            .catch(err => {
                console.log(err)
                res.status(500).json(err)
            })
    }
}

module.exports = UserController