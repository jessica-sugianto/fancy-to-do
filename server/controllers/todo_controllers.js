const Todo = require('../models').Todo
const User = require('../models').User

class TodoControllers {

    static findAll(req, res) {
        Todo.findAll({
                include: User,
                where: {
                    UserId: req.UserId
                }
            })
            .then(todos => {
                res.status(200).json(todos)
            })
            .catch(err => {
                console.log(err.message)
                res.status(500).json({
                    message: 'internal server error'
                })
            })
    }

    static create(req, res) {
        Todo.create({
                title: req.body.title,
                description: req.body.description,
                status: Number(req.body.status),
                due_date: new Date(req.body.due_date),
                UserId: req.UserId
            })
            .then(todo => {
                res.status(201).json(todo)
            })
            .catch(err => {
                console.log(err.message)
                if (err.message) {
                    res.status(400).json(err.message)
                } else {
                    res.status(500).json({
                        message: 'internal server error'
                    })
                }
            })
    }
    static getOne(req, res) {
        // console.log(req.params.id)
        Todo.findOne({
                include: User,
                where: {
                    id: req.params.id
                }
            })
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
                res.status(500).json({
                    message: 'internal server error'
                })
            })
    }

    static update(req, res) {
        console.log(req.body)
        Todo.findOne({
                where: {
                    id: req.params.id,
                    UserId: req.UserId
                }
            })
            .then(todo => {
                if (todo) {
                    return Todo.update({
                        title: req.body.title,
                        description: req.body.description,
                        status: Number(req.body.status),
                        due_date: new Date(req.body.due_date)
                    }, {
                        where: {
                            id: todo.id
                        }
                    })
                } else {
                    res.status(404).json({
                        message: 'todo not found'
                    })
                }
            })
            .then(todo => {
                return Todo.findOne({
                    include: User,
                    where: {
                        id: req.params.id
                    }
                })
            })
            .then(todo => {
                res.status(200).json(todo)
            })
            .catch(err => {
                console.log(err.message)
                if (err.message) {
                    res.status(400).json(err.message)
                } else {
                    res.status(500).json({
                        message: 'internal server error'
                    })
                }
            })
    }

    static destroy(req, res) {
        let todoDelete = null
        Todo.findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(todo => {
                if (todo) {
                    todoDelete = todo
                    return Todo.destroy({
                        where: {
                            id: req.params.id
                        }
                    })
                } else {
                    res.status(404).json({
                        message: 'todo not found'
                    })
                }
            })
            .then(todo => {
                res.status(200).json(todoDelete)
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({
                    message: 'internal server error'
                })
            })
    }
}

module.exports = TodoControllers