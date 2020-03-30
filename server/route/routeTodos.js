const { Router } = require('express')
const router = Router()
const Controller = require('../controllers/todo_controllers.js')


router.get('/', Controller.findAll)

router.post('/add', Controller.create)

router.put('/:id/edit', Controller.update)

router.delete('/:id/delete', Controller.destroy)


module.exports = router