const jwt = require('jsonwebtoken')

module.exports = {
    authentication : function (req, res, next) {
        try {
            const decoded = jwt.verify(req.headers.token, process.env.JWT_SECRET)
            req.authenticatedUser = decoded
            next()
        } catch (error) {
            res.status(401).json(error)
        }
    }
}