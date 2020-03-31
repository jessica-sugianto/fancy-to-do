const { Router } = require('express')
const router = Router()
const Controller = require('../controllers/todo_controllers.js')
const Authentication = require('../midlewares/authentication')
const Authorization = require('../midlewares/authorization')


router.get('/', Authentication, Controller.findAll)

router.get('/:id', Authentication, Authorization, Controller.getOne)

router.post('/', Authentication, Controller.create)

router.put('/:id', Authentication, Authorization, Controller.update)

router.delete('/:id', Authentication, Authorization, Controller.destroy)


module.exports = router