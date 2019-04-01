const router = require('express').Router()
const userController = require('../../controllers/userController')
const authController = require('../../controllers/authController')
const {authentication, authorization, isUser} = require('../../middlewares')

//signin & signup
router.post('/signin', authController.login)
router.post('/signup', authController.register)
//
router.use(authentication)

router.get('/users', authorization, userController.userList)

router.get('/users/:id', isUser, userController.oneUser)

router.post('/users', authorization, userController.createUser)

router.delete('/users/:id', authorization, userController.deleteUser)

router.put('/users/:id', isUser, userController.updateUser)

module.exports = router