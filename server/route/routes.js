const { Router } = require('express')
const router = Router()
const Todos = require('./routeTodos.js')

router.use('/todos', Todos)

module.exports = router