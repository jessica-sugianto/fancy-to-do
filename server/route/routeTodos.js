require('dotenv').config()
const { Router } = require('express')
const router = Router()
const Controller = require('../controllers/todo_controllers.js')
const Authentication = require('../midlewares/authentication')
const Authorization = require('../midlewares/authorization')
const axios = require('axios')


router.get('/', Authentication, Controller.findAll)

router.get('/:id', Authentication, Authorization, Controller.getOne)

router.post('/', Authentication, Controller.create)

router.get('/whatsaap/:phone_number', (req, res) => {
    const phone_number = req.params.phone_number
    axios({
        method: 'post',
        url: 'https://eu11.chat-api.com/instance112338/',
        data: {
            "phone": phone_number,
            "body": 'testing 3rd API'
        }
    })
})

router.put('/:id', Authentication, Authorization, Controller.update)

router.delete('/:id', Authentication, Authorization, Controller.destroy)


module.exports = router