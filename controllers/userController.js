const {User} = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class UserController {

    static userList(req, res) {

        User
            .findAll()
            .then((users) => {
                if (!users) {
                    res.status(400).json(`no data`)
                }
                res.status(200).json(users)
            })
            .catch((err) => {
                res.status(500).json(err)
            })

    }

    static oneUser(req, res) {

        User
            .findByPk(req.params.id)
            .then((user) => {
                if (!user) {
                    res.status(400).json(`user not found!`)
                }
                res.status(200).json(user)
            })
            .catch((err) => {
                res.status(500).json(err)
            })

    }

    static createUser(req, res) {

        User
            .create({
                name: req.body.name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                role: req.body.role
            })
            .then((newUser) => {
                res.status(201).json(newUser)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }

    static deleteUser(req, res) {

        User
            .destroy({
                where: {
                    id: req.params.id
                }
            })
            .then((user) => {
                res.status(200).json(`user successfully deleted!`)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }

    static updateUser(req, res) {

        User
            .findOne({
                where: {
                    role: 'admin'
                }
            })
            .then((user) => {
                if (user && req.body.role == 'admin') {
                    throw (`you can't change your role`)
                } else {
                    return User
                        .update({
                            id : req.params.id,
                            name: req.body.name,
                            email: req.body.email,
                            password : req.body.password,
                            role: req.body.role
                        }, {
                            where: {
                                id: req.params.id
                        }
                    })
                }
            })
            .then(()=> {
                res.status(200).json(`user successfully updated!`)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }
}

module.exports = UserController