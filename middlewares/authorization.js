module.exports = {
    authorization: function(req, res, next) {
        if (req.authenticatedUser.role == 'admin') {
            next()
        } else {
            res.status(403).json(`you are not authorized`)
        }
    }
}