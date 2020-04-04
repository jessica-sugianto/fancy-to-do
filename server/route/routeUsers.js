const { Router } = require('express')
const router = Router()
const Controller = require('../controllers/user_controllers.js')


router.post('/register', Controller.register)

router.post('/login', Controller.login)

router.post('/OAuth', Controller.loginOAuth)

module.exports = router