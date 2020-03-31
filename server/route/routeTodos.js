const { Router } = require('express')
const router = Router()
const Controller = require('../controllers/todo_controllers.js')
const Midleware = require('../midlewares/authentication')


router.get('/', Midleware, Controller.findAll)

router.get('/:id', Midleware, Controller.getOne)

router.post('/', Midleware, Controller.create)

router.put('/:id', Midleware, Controller.update)

router.delete('/:id', Midleware, Controller.destroy)


module.exports = router