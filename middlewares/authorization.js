module.exports = {
    authorization: function(req, res, next) {
        console.log(req.authenticatedUser)
        if (req.authenticatedUser.role == 'admin') {
            next()
        } else {
            res.status(403).json(`you are not authorized`)
        }
    }
}