const { Router } = require('express')
const router = Router()
const Controller = require('../controllers/todo_controllers.js')


router.get('/', Controller.findAll)

router.get('/:id', Controller.getOne)

router.post('/add', Controller.create)

router.put('/:id', Controller.update)

router.delete('/:id', Controller.destroy)


module.exports = router