const Todo = require('../models').Todo

class TodoControllers {

    static findAll(req, res) {
        Todo.findAll()
            .then(todos => {
                res.status(200).json(todos)
            })
            .catch(err => {
                console.log(err)
                res.status(500).json(err)
            })
    }

    static create(req, res) {
        // console.log(req.body)
        Todo.create({
                title: req.body.title,
                description: req.body.description,
                status: Number(req.body.status),
                due_date: new Date(req.body.due_date)
            })
            .then(todo => {
                res.status(201).json(todo)
            })
            .catch(err => {
                console.log(err)
                res.status(500).json(err)
            })
    }
    static getOne(req, res) {
        // console.log(req.params.id)
        Todo.findByPk(req.params.id)
            .then(todo => {
                if (todo) {
                    res.status(200).json(todo)
                } else {
                    res.status(404).json({
                        message: 'todo not found'
                    })
                }
            })
            .catch(err => {
                console.log(err)
                res.status(500).json(err)
            })
    }

    static update(req, res) {
        let todo = null
        Todo.findByPk(req.params.id)
            .then(todo => {
                if (todo) {

                } else {
                    res.status(404).json({
                        message: 'todo not found'
                    })
                }
            })
    }
}

module.exports = TodoControllers