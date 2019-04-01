const {authentication} = require('../middlewares/authentication')
const {authorization} = require('../middlewares/authorization')
const {isUser} = require('../middlewares/isUser')

module.exports = {
    authentication, authorization, isUser
}