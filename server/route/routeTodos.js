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

router.get('/google/:search', (req, res) => {
    const search = req.params.search
    axios({
            method: 'get',
            url: `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_SEARCH}&cx=013133766359376989566:ftzqfhbtzlw&q=${search}`
        })
        .then((result) => {
            console.log(result)
            res.status(200).json(result.data.items)
        })
        .catch(err => {
            res.status(500).json({
                message: err
            })
        })
})

router.put('/:id', Authentication, Authorization, Controller.update)

router.delete('/:id', Authentication, Authorization, Controller.destroy)


module.exports = router