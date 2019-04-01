const jwt = require('jsonwebtoken')
const { User } = require('../models')
const bcrypt = require('bcryptjs')

class AuthController {
    static login(req, res) {
        User
            .findOne({
                where: {
                    email: req.body.email
                }
            })
            .then((user) => {
                if (!user) {
                    res.status(404).json(`user not found!`)
                } else {
            
                    if (!bcrypt.compareSync(req.body.password, user.password)) {
                        res.status(404).json(`wrong password!`)
                    } else {
                        //payload
                        const token = jwt.sign({
                            id: user.id,
                            email: user.email,
                            role: user.role
                        }, process.env.JWT_SECRET)
                        res.status(200).json({
                            message: `user successfully login! ${user.greeting()}`,
                            token: token
                        })
                    }
                }
            })
            .catch((err) => {
                res.status(500).json(err.message)
            })
    }

    static register(req,res) {

        User
            .findOne({
                where: {
                    role: 'admin'
                }
            })
            .then((admin) => {
                if (admin && req.body.role == 'admin') {
                    throw (`admin already exist`)
                } else {
                    return User
                        .create({
                            name: req.body.name,
                            email: req.body.email,
                            password: bcrypt.hashSync(req.body.password, 10),
                            role: req.body.role
                        })
                }
            })
            .then((user)=> {
                let greet = user.greeting()
                res.status(201).json({user, greet})
            })
            .catch((err)=> {
                 res.status(500).json(err.message)
            })
    }
}

module.exports = AuthController