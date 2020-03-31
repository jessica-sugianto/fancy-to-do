const { Router } = require('express')
const router = Router()
const Todos = require('./routeTodos.js')
const Users = require('./routeUsers.js')

router.use('/todos', Todos)
router.use('/users', Users)

module.exports = router